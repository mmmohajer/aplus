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

    def test_if_anonymous_cannot_create_profile(self, create_profile):
        response = create_profile({'city': 'Tehran'})
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_if_authenticated_user_cannot_create_profile(self, authenticate, create_profile):
        authenticate()
        response = create_profile({'city': 'Tehran'})
        assert response.status_code == status.HTTP_403_FORBIDDEN

    def test_if_admin_user_cannot_create_profile(self, authenticate, create_profile):
        authenticate(user_group="Admin")
        response = create_profile({'city': 'Tehran'})
        assert response.status_code == status.HTTP_405_METHOD_NOT_ALLOWED


@pytest.mark.django_db()
class TestRetrieveProfile:

    def test_if_authenticated_user_can_view_HisOrHer_profile(self, api_client, authenticate_with_user):
        user = baker.make(User)
        profile = baker.make(ProfileModel, user=user)
        authenticate_with_user(user=user)
        response = api_client.get('/api/profile/me/')
        assert response.status_code == status.HTTP_200_OK
        assert response.data["id"] == profile.id
        assert response.data["user"]["id"] == user.id

    def test_if_authenticated_user_can_view_other_user_profile(self, api_client, authenticate_with_user):
        user1 = baker.make(User)
        user2 = baker.make(User)
        profile = baker.make(ProfileModel, user=user2)
        authenticate_with_user(user=user1)
        response = api_client.get(f"/api/profile/{profile.id}/")
        assert response.status_code == status.HTTP_200_OK
        assert response.data["id"] == profile.id
        assert response.data["user"]["id"] == user2.id

    def test_if_anonymous_user_cannot_view_user_profile(self, api_client):
        profile = baker.make(ProfileModel)
        response = api_client.get(f"/api/profile/{profile.id}/")
        assert response.status_code == status.HTTP_404_NOT_FOUND

    def test_if_authenticated_user_can_view_paginated_profiles(self, api_client, authenticate):
        user = baker.make(User)
        baker.make(ProfileModel, _quantity=20)
        authenticate()
        response = api_client.get(f"/api/profile/")
        regTest = re.compile("page=2$")
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data["results"]) == 10
        assert response.data["count"] == 20
        assert regTest.search(response.data["next"])

    def test_if_anonymous_user_cannot_view_paginated_profiles(self, api_client):
        baker.make(ProfileModel, _quantity=20)
        response = api_client.get(f"/api/profile/")
        assert response.status_code == status.HTTP_200_OK
        assert response.data["count"] == 0
        assert len(response.data["results"]) == 0
        assert response.data["next"] == None

    def test_if_authenticated_user_can_view_all_profiles(self, api_client, authenticate):
        baker.make(ProfileModel, _quantity=20)
        authenticate()
        response = api_client.get(f"/api/profile/all/")
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data) == 20

    def test_if_annymous_user_cannot_view_all_profiles(self, api_client, authenticate_with_user):
        response = api_client.get(f"/api/profile/all/")
        assert response.status_code == status.HTTP_401_UNAUTHORIZED


@pytest.mark.django_db()
class TestUpdateProfile:

    def test_if_authenticated_user_can_update_HisOrHer_profile(self, api_client, authenticate_with_user):
        user = baker.make(User)
        baker.make(ProfileModel, user=user)
        authenticate_with_user(user=user)
        response = api_client.put("/api/profile/me/", {"city": "Tehran"})
        assert response.status_code == status.HTTP_200_OK
        assert response.data["city"] == "Tehran"

    def test_if_anonymous_user_cannot_update_user_profile(self, api_client, authenticate_with_user):
        profile = baker.make(ProfileModel)
        response = api_client.post(f"/api/profile/{profile.id}/", {"city": "Tehran"})
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_if_authenticated_user_cannot_update_other_user_profile(self, api_client, authenticate_with_user):
        user1 = baker.make(User)
        user2 = baker.make(User)
        profile = baker.make(ProfileModel, user=user2)
        authenticate_with_user(user=user1)
        response = api_client.put(f"/api/profile/{profile.id}/", {"city": "Tehran"})
        assert response.status_code == status.HTTP_403_FORBIDDEN

    def test_if_admin_user_can_update_other_user_profile(self, api_client, authenticate_with_user):
        user1 = baker.make(User)
        user2 = baker.make(User)
        profile = baker.make(ProfileModel, user=user2)
        authenticate_with_user(user=user1, user_group="Admin")
        response = api_client.put(f"/api/profile/{profile.id}/", {"city": "Tehran"})
        assert response.status_code == status.HTTP_200_OK
        assert response.data["city"] == "Tehran"


@pytest.mark.django_db()
class TestDeleteProfile:

    def test_if_authenticated_user_can_delete_HisOrHer_profile(self, api_client, authenticate_with_user):
        user = baker.make(User)
        baker.make(ProfileModel, user=user)
        authenticate_with_user(user=user)
        response = api_client.delete("/api/profile/me/")
        assert response.status_code == status.HTTP_204_NO_CONTENT

    def test_if_anonymous_user_cannot_delete_user_profile(self, api_client, authenticate_with_user):
        profile = baker.make(ProfileModel)
        response = api_client.delete(f"/api/profile/{profile.id}/")
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_if_authenticated_user_cannot_delete_other_user_profile(self, api_client, authenticate_with_user):
        user1 = baker.make(User)
        user2 = baker.make(User)
        profile = baker.make(ProfileModel, user=user2)
        authenticate_with_user(user=user1)
        response = api_client.delete(f"/api/profile/{profile.id}/")
        assert response.status_code == status.HTTP_403_FORBIDDEN

    def test_if_admin_user_can_delete_other_user_profile(self, api_client, authenticate_with_user):
        user1 = baker.make(User)
        user2 = baker.make(User)
        profile = baker.make(ProfileModel, user=user2)
        authenticate_with_user(user=user1, user_group="Admin")
        response = api_client.delete(f"/api/profile/{profile.id}/")
        assert response.status_code == status.HTTP_204_NO_CONTENT
