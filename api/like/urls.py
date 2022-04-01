from django.urls import path, include
from rest_framework import routers

from . import views

api_router = routers.DefaultRouter()
api_router.register(r'likeduser', views.LikedUserViewSet, basename='likeduser')

urlpatterns = [
    path('', include(api_router.urls)),
]
