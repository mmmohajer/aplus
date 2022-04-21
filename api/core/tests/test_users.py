from rest_framework import status
import pytest
from model_bakery import baker
from django.contrib.auth import get_user_model
import re

User = get_user_model()


@pytest.fixture
def create_user(api_client):
    def do_create_profile(user):
        return api_client.post('/api/auth/users/', user)
    return do_create_profile


@pytest.mark.django_db()
class TestCreateUser:

    def test_if_anonymous_can_register(self, create_user):
        response = create_user(
            {'first_name': 'Mohammad',
             'last_name': 'Mohajer',
             'email': 'mmmohajer70@gmail.com',
             'password': 'SuperSecurePassword!'})
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data["email"] == "mmmohajer70@gmail.com"

    def test_if_email_is_required_on_register(self, create_user):
        response = create_user(
            {'first_name': 'Mohammad',
             'last_name': 'Mohajer',
             'password': 'SuperSecurePassword!'})
        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert bool(response.data.get("email")) == True

    def test_if_password_is_required_on_register(self, create_user):
        response = create_user(
            {'first_name': 'Mohammad',
             'last_name': 'Mohajer',
             'email': 'mmmohajer70@gmail.com'})
        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert bool(response.data.get("password")) == True

    def test_if_first_name_is_optional_on_register(self, create_user):
        response = create_user(
            {'last_name': 'Mohajer',
             'email': 'mmmohajer70@gmail.com',
             'password': 'SuperSecurePassword!'})
        print(response.data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data["email"] == "mmmohajer70@gmail.com"

    def test_if_last_name_is_optional_on_register(self, create_user):
        response = create_user(
            {'first_name': 'Mohammad',
             'email': 'mmmohajer70@gmail.com',
             'password': 'SuperSecurePassword!'})
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data["email"] == "mmmohajer70@gmail.com"

    def test_if_user_is_must_verify_email_on_register(self, create_user):
        response = create_user(
            {'first_name': 'Mohammad',
             'last_name': 'Mohajer',
             'email': 'mmmohajer70@gmail.com',
             'password': 'SuperSecurePassword!'})
        user = User.objects.filter(id=response.data["id"]).first()
        assert response.status_code == status.HTTP_201_CREATED
        assert user.register_token != ""
        assert user.is_active == False
