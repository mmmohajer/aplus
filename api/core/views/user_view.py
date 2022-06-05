from django.shortcuts import get_object_or_404
from django.conf import settings
from requests import delete
from rest_framework import viewsets, permissions, status, views, response, decorators, response, pagination
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
import django.contrib.auth.password_validation as validators
import requests
import json
import jwt

from core.permissions import *
from core.models import *
from core.serializers import *
from core.tasks import send_activation_email, send_reset_password_email
from core.utils import isAdmin, code_generator

User = get_user_model()


class ActivateUserViewSet(views.APIView):

    def post(self, request, format=None):
        user = get_object_or_404(User, id=request.data.get("userId"))
        if user:
            register_token = request.data.get("token")
            if user.register_token == register_token:
                user.is_active = True
                user.save(update_fields=["is_active"])
                return response.Response(status=status.HTTP_200_OK, data={"is_activated": True, "message": "User has been successfully activated!"})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"is_activated": False, "message": "Unable to activate a user!"})


class ResendActivationEmailViewSet(views.APIView):

    def post(self, request, format=None):
        user = get_object_or_404(User, email=request.data.get("email"))
        if user:
            user_token = str(AccessToken.for_user(user))
            user.register_token = user_token
            user.save(update_fields=["register_token"])
            send_activation_email.delay(user.first_name, user.email, user_token)
            return response.Response(status=status.HTTP_200_OK, data={"email_sent": True, "message": "Email has been successfully sent!"})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"email_sent": False, "message": "No user found with this email address in our database."})


class SendForgotPasswordViewSet(views.APIView):

    def post(self, request, format=None):
        user = get_object_or_404(User, email=request.data.get("email"))
        if user:
            user_token = str(AccessToken.for_user(user))
            user.reset_password_token = user_token
            user.save(update_fields=["reset_password_token"])
            send_reset_password_email.delay(user.first_name, user.email, user_token)
            return response.Response(status=status.HTTP_200_OK, data={"email_sent": True, "message": "Please check your inbox to reset your password!"})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"email_sent": False, "message": "No user found with this email address in our database."})


class ResetPasswordViewSet(views.APIView):

    def post(self, request, format=None):
        user = get_object_or_404(User, id=request.data.get("userId"))
        if user:
            reset_password_token = request.data.get("token")
            if user.reset_password_token == reset_password_token:
                password = request.data.get("password")
                try:
                    validators.validate_password(password=password, user=user)
                    user.set_password(password)
                    user.is_active = True
                    user.save(update_fields=["is_active", "password"])
                    return response.Response(status=status.HTTP_200_OK, data={"password_reset": True, "message": "Pasword has been reset successfully!"})
                except Exception as e:
                    return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"password_reset": False, "error": str(e)})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"password_reset": False, "message": "Unable to reset the password!"})


class UserDeleteViewSet(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, id, *args, **kwargs):
        current_user = request.user
        to_be_deleted_user = get_object_or_404(User, id=id)
        if isAdmin(current_user):
            to_be_deleted_user.delete()
            return response.Response(status=status.HTTP_204_NO_CONTENT)
        if current_user.id == to_be_deleted_user.id:
            password = request.GET.get("password")
            is_correct_password = to_be_deleted_user.check_password(password)
            if (is_correct_password):
                to_be_deleted_user.delete()
                return response.Response(status=status.HTTP_204_NO_CONTENT)
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"error": "Incorrect password"})
        return response.Response(status=status.HTTP_403_FORBIDDEN)


class AuthenticateUserViewSet(views.APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        current_user = request.user
        if current_user:
            return response.Response(status=status.HTTP_200_OK, data={"Authenticated": current_user.is_authenticated})
        return response.Response(status=status.HTTP_404_NOT_FOUND)


class GoogleAuthViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        client_id = settings.GOOGLE_AUTH_CLIENT_ID
        client_secret = settings.GOOGLE_AUTH_CLIENT_SECRET
        ouathUrl = "https://oauth2.googleapis.com/token"
        redirect_url = settings.GOOGLE_OAUTH_REDIRECT_URI
        code = request.data.get("code")
        googleTokenReqApiUrl = f"{ouathUrl}?client_id={client_id}&client_secret={client_secret}&redirect_uri={redirect_url}&grant_type=authorization_code&code={code}"
        try:
            res = requests.post(googleTokenReqApiUrl)
            return response.Response(status=status.HTTP_200_OK, data={"Authorization Data": json.loads(res.content)})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"Error": str(e)})


class GoogleAuthHandleTokenViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        id_token = request.data.get("id_token")
        access_token = f"Bearer {request.data.get('access_token')}"
        googleAuthGetProfileUrl = f"https://oauth2.googleapis.com/tokeninfo?id_token={id_token}"
        headers = {"Content-Type": "application/json", "Authorization": access_token}
        try:
            res = requests.get(googleAuthGetProfileUrl, headers=headers)
            user_data = json.loads(res.content)
            email = user_data.get("email")
            user_queryset = User.objects.filter(email=email)
            if user_queryset:
                cur_user = user_queryset.first()
                cur_user_access_token = AccessToken.for_user(cur_user)
                cur_user_refresh_token = RefreshToken.for_user(cur_user)
            else:
                first_name = user_data.get("given_name")
                last_name = user_data.get("family_name")
                password = code_generator()
                # Register User
                cur_user = User(first_name=first_name, last_name=last_name, email=email)
                cur_user.set_password(password)
                cur_user.is_active = True
                cur_user.save()
                # Create profile for the new registered user
                profile = ProfileModel()
                profile.user = cur_user
                profile.save()
                subscriber_group = Group.objects.filter(name="Subscriber").first()
                if subscriber_group:
                    subscriber_group.user_set.add(cur_user)
                # Generate access and refresh tokens to login the user
                cur_user_access_token = AccessToken.for_user(cur_user)
                cur_user_refresh_token = RefreshToken.for_user(cur_user)
            return response.Response(status=status.HTTP_200_OK,
                                     data={"access": str(cur_user_access_token), "refresh": str(cur_user_refresh_token)})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"Error": str(e)})
