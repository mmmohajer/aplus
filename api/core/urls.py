from django.urls import path
from core import views

urlpatterns = [
    path('test/', views.TestView.as_view()),
]
