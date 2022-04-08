from django.urls import path, include
from rest_framework import routers

from . import views

api_router = routers.DefaultRouter()
api_router.register(r'profile', views.ProfileViewSet, basename='profile')

urlpatterns = [
    path('', include(api_router.urls)),
    path('say-hello/', views.SayHello),
]
