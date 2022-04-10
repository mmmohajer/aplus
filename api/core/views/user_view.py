from django.shortcuts import get_object_or_404
from django.conf import settings
from rest_framework import viewsets, permissions, status, views, response, decorators, response, pagination
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import AccessToken
import django.contrib.auth.password_validation as validators

from core.permissions import *
from core.models import *
from core.serializers import *
from core.tasks import send_activation_email, send_reset_password_email

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
            print(reset_password_token)
            print(user.reset_password_token)
            if user.reset_password_token == reset_password_token:
                password = request.data.get("password")
                print(password)
                try:
                    validators.validate_password(password=password, user=user)
                    user.set_password(password)
                    user.is_active = True
                    user.save(update_fields=["is_active", "password"])
                    return response.Response(status=status.HTTP_200_OK, data={"password_reset": True, "message": "Pasword has been reset successfully!"})
                except Exception as e:
                    return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"password_reset": False, "error": str(e)})
        return response.Response(status=status.HTTP_400_BAD_REQUEST, data={"password_reset": False, "message": "Unable to reset the password!"})
