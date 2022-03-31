from django.shortcuts import render
from rest_framework import viewsets, permissions, status, views, response, decorators, response
from django.contrib.auth import get_user_model

from . import models
from . import serializers

User = get_user_model()


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = models.Profile.objects.all()
    serializer_class = serializers.ProfileSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        user_groups_queryset = self.request.user.groups.all()
        cur_user_groups = [group.name for group in list(user_groups_queryset)]
        if "Admin" in cur_user_groups:
            return models.Profile.objects.all()
        elif "Subscriber" in cur_user_groups:
            return models.Profile.objects.filter(user_id=self.request.user.id)
        else:
            return []

    @decorators.action(detail=False)
    def me(self, request):
        profile = models.Profile.objects.get(user_id=request.user.id)
        serializer = serializers.ProfileSerializer(profile)
        return response.Response(serializer.data)
