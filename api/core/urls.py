from django.urls import path, include
from rest_framework import routers

from . import views

api_router = routers.DefaultRouter()
api_router.register(r'profile', views.ProfileViewSet, basename='profile')

urlpatterns = [
    path('', include(api_router.urls)),
    path('activate-user/', views.ActivateUserViewSet),
    path('resend-activation-email/', views.ResendActivationEmailViewSet),
    path('send-reset-password-email/', views.SendForgotPasswordViewSet),
    path('reset-password/', views.ResetPasswordViewSet),
    path('auth/delete-users/<int:id>/', views.UserDeleteViewSet),
    path('auth/authenticate-user/', views.AuthenticateUserViewSet),
]
