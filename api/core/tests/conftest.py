from rest_framework.test import APIClient
import pytest
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group


User = get_user_model()


@pytest.fixture
def api_client():
    return APIClient()


@pytest.fixture
def authenticate(api_client):
    def do_authenticate(user_group="Subscriber"):
        user = User.objects.create()
        group = Group.objects.create(name=user_group)
        group.user_set.add(user)
        return api_client.force_authenticate(user=user)
    return do_authenticate


@pytest.fixture
def authenticate_with_user(api_client):
    def do_authenticate_sith_user(user, user_group="Subscriber"):
        group = Group.objects.create(name=user_group)
        group.user_set.add(user)
        return api_client.force_authenticate(user=user)
    return do_authenticate_sith_user
