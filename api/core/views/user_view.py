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
from core.utils import isAdmin, code_generator, oauthHandleToken

User = get_user_model()


class AddUserToGroup(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        cur_user = request.user
        group_name = request.data.get("groupName")
        if not cur_user:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "We found no authenticated user!"})
        if not group_name:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "No group name is specified!"})
        cur_group = Group.objects.filter(name=group_name).first()
        if cur_group:
            cur_group.user_set.add(cur_user)
            return response.Response(status=status.HTTP_200_OK, data={"message": f"User has been successfully added to group {group_name}"})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": f"There is no group existing in the database with name {group_name}"})


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
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": "Incorrect password"})
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
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})


class GoogleAuthHandleTokenViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        id_token = request.data.get("id_token")
        googleAuthGetProfileUrl = f"https://oauth2.googleapis.com/tokeninfo?id_token={id_token}"
        success, data = oauthHandleToken(request, googleAuthGetProfileUrl)
        if success:
            return response.Response(status=status.HTTP_200_OK, data=data)
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data=data)


class MicrosoftAuthViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        client_id = settings.MICROSOFT_AUTH_CLIENT_ID
        client_secret = settings.MICROSOFT_AUTH_CLIENT_SECRET
        ouathUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/token"
        redirect_url = settings.MICROSOFT_OAUTH_REDIRECT_URI
        code = request.data.get("code")
        microsoftTokenReqApiUrl = f"{ouathUrl}?client_id={client_id}&client_secret={client_secret}&redirect_uri={redirect_url}&grant_type=authorization_code&code={code}"
        try:
            headers = {"Content-Type": "application/x-www-form-urlencoded"}
            payload = {"code": code, "client_secret": client_secret,
                       "grant_type": "authorization_code", "client_id": client_id, "redirect_uri": redirect_url}
            res = requests.post(microsoftTokenReqApiUrl, headers=headers, data=payload)
            return response.Response(status=status.HTTP_200_OK, data={"Authorization Data": json.loads(res.content)})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})


class MicrosoftAuthHandleTokenViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        microsoftAuthGetProfileUrl = f"https://graph.microsoft.com/oidc/userinfo"
        success, data = oauthHandleToken(request, microsoftAuthGetProfileUrl)
        if success:
            return response.Response(status=status.HTTP_200_OK, data=data)
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data=data)


class FacebookAuthViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        client_id = settings.FACEBOOK_AUTH_CLIENT_ID
        client_secret = settings.FACEBOOK_AUTH_CLIENT_SECRET
        ouathUrl = "https://graph.facebook.com/v14.0/oauth/access_token"
        redirect_url = settings.FACEBOOK_OAUTH_REDIRECT_URI
        code = request.data.get("code")
        facebookTokenReqApiUrl = f"{ouathUrl}?client_id={client_id}&client_secret={client_secret}&redirect_uri={redirect_url}&code={code}"
        try:
            res = requests.get(facebookTokenReqApiUrl)
            return response.Response(status=status.HTTP_200_OK, data={"Authorization Data": json.loads(res.content)})
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})


class FacebookAuthHandleTokenViewSet(views.APIView):

    def post(self, request, *args, **kwargs):
        facebookAuthGetIdUrl = f"https://graph.facebook.com/v2.3/me"
        access_token = f"Bearer {request.data.get('access_token')}"
        headers = {"Content-Type": "application/json", "Authorization": access_token}
        try:
            res = requests.get(facebookAuthGetIdUrl, headers=headers)
            user_data = json.loads(res.content)
            user_id = user_data.get("id")
            facebookAuthGetProfileUrl = f"https://graph.facebook.com/{user_id}?fields=id,name,email,picture,first_name,last_name"
            success, data = oauthHandleToken(
                request, facebookAuthGetProfileUrl, first_name_key="first_name", last_name_key="last_name")
            if success:
                return response.Response(status=status.HTTP_200_OK, data=data)
            else:
                return response.Response(status=status.HTTP_400_BAD_REQUEST, data=data)
        except Exception as e:
            return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"message": str(e)})
