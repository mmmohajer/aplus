from rest_framework import status
import pytest
from model_bakery import baker
from django.contrib.auth import get_user_model
import re

from core.models import ProfileModel

User = get_user_model()


@pytest.fixture
def create_profile(api_client):
    def do_create_profile(profile):
        return api_client.post('/api/profile/', profile)
    return do_create_profile


@pytest.mark.django_db()
class TestCreateProfile:

    def test_if_user_is_anonymous_returns_401(self, create_profile):
        response = create_profile({'city': 'Tehran'})
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_if_user_is_not_admin_retuns_returns_403(self, authenticate, create_profile):
        authenticate()
        response = create_profile({'city': 'Tehran'})
        assert response.status_code == status.HTTP_403_FORBIDDEN


@pytest.mark.django_db()
class TestRetrieveProfile:

    def test_if_subscribed_user_can_view_HisOrHer_profile(self, api_client, authenticate_with_user):
        user = baker.make(User)
        profile = baker.make(ProfileModel, user=user)
        authenticate_with_user(user=user)
        response = api_client.get('/api/profile/me/')
        assert response.status_code == status.HTTP_200_OK
        assert response.data["id"] == profile.id
        assert response.data["user"]["id"] == user.id

    def test_if_subscribed_user_can_view_other_user_profile(self, api_client, authenticate_with_user):
        user1 = baker.make(User)
        user2 = baker.make(User)
        profile = baker.make(ProfileModel, user=user2)
        authenticate_with_user(user=user1)
        response = api_client.get(f"/api/profile/{profile.id}/")
        assert response.status_code == status.HTTP_200_OK
        assert response.data["id"] == profile.id
        assert response.data["user"]["id"] == user2.id

    def test_if_subscribed_user_can_view_all_profiles(self, api_client, authenticate_with_user):
        user = baker.make(User)
        baker.make(ProfileModel, _quantity=20)
        authenticate_with_user(user=user)
        response = api_client.get(f"/api/profile/")
        regTest = re.compile("page=2$")
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data["results"]) == 10
        assert response.data["count"] == 20
        assert regTest.search(response.data["next"])
