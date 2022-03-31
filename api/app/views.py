from urllib import request
from django.shortcuts import render
from django.conf import settings
from rest_framework import viewsets, permissions, status, views, response, decorators, response
from django.contrib.auth import get_user_model

from core.permissions import IsAdminOrReadOnly
from . import models
from . import serializers

User = get_user_model()


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = models.Profile.objects.all()
    serializer_class = serializers.ProfileSerializer
    permission_classes = [IsAdminOrReadOnly]

    # def get_permissions(self):
    #     if self.request.method == "GET":
    #         return [permissions.IsAuthenticated()]
    #     return [permissions.IsAdminUser()]

    def get_queryset(self):
        user_groups_queryset = self.request.user.groups.all()
        cur_user_groups = [group.name for group in list(user_groups_queryset)]
        if "Admin" in cur_user_groups or "Subscriber" in cur_user_groups:
            return models.Profile.objects.all()
        else:
            return []

    @decorators.action(detail=False, methods=["GET", "PUT"], permission_classes=[permissions.IsAuthenticated])
    def me(self, request):
        profile, created = models.Profile.objects.get_or_create(user_id=request.user.id)
        if request.method == "GET":
            serializer = serializers.ProfileSerializer(profile)
            return response.Response(serializer.data)
        elif request.method == "PUT":
            serializer = serializers.ProfileSerializer(profile, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return response.Response(serializer.data)

    @decorators.action(detail=False, methods=["GET"], permission_classes=[permissions.IsAuthenticated])
    def all(self, request):
        profile_queryset = models.Profile.objects.all()
        serializer = serializers.ProfileSerializer(profile_queryset, many=True)
        return response.Response(serializer.data)
