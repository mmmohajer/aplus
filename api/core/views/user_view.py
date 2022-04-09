from django.shortcuts import get_object_or_404
from django.conf import settings
from rest_framework import viewsets, permissions, status, views, response, decorators, response, pagination
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import AccessToken

from core.permissions import *
from core.models import *
from core.serializers import *
from core.tasks import send_activation_email

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
