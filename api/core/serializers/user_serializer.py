from djoser.serializers import (UserSerializer as BaseUserSerializer,
                                UserCreateSerializer as BaseUserCreateSerializer
                                )
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from django.db import IntegrityError, transaction
from django.conf import settings
from rest_framework import serializers
from rest_framework_simplejwt.tokens import AccessToken
from djoser.signals import user_registered, user_activated

from core.models import ProfileModel
from core.tasks import send_activation_email
from core.utils import code_generator

User = get_user_model()


class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'uuid', 'first_name', 'last_name', 'email', 'password']

    def create(self, validated_data):
        try:
            user = self.perform_create(validated_data)
            profile = ProfileModel()
            profile.user = user
            profile.save()
            subscriber_group = Group.objects.filter(name="Subscriber").first()
            if subscriber_group:
                subscriber_group.user_set.add(user)
        except IntegrityError:
            self.fail("cannot_create_user")

        return user

    def perform_create(self, validated_data):
        with transaction.atomic():
            user = User.objects.create_user(**validated_data)
            if settings.SEND_ACTIVATION_EMAIL:
                user.is_active = False
                user_token = str(AccessToken.for_user(user))
                user.register_token = user_token
                user.save(update_fields=["is_active", "register_token"])
                send_activation_email.delay(
                    validated_data["first_name"], validated_data["email"], user_token)
        return user


class UserSerializer(BaseUserSerializer):

    groups = serializers.SerializerMethodField('get_groups')

    def get_groups(self, obj):
        user_groups_queryset = obj.groups.all()
        cur_user_groups = [group.name for group in list(user_groups_queryset)]
        return cur_user_groups

    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'uuid', 'first_name', 'last_name', 'email', 'groups']
