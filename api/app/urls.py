from django.urls import path, include
from rest_framework import routers

from . import views

api_router = routers.DefaultRouter()
api_router.register(r'contact_form', views.ContactFormViewSet, basename='contact_form')

urlpatterns = [
    path('', include(api_router.urls))
]
