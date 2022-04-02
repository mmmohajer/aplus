from django.urls import path, include
from rest_framework import routers

from . import views

api_router = routers.DefaultRouter()
api_router.register(r'userlike', views.UserLikeViewSet, basename='userlike')

urlpatterns = [
    path('', include(api_router.urls)),
]
