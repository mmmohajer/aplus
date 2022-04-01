from rest_framework import viewsets, permissions, status, views, response, decorators, response
from django.contrib.auth import get_user_model

from like.models import *
from like.serializers import *

User = get_user_model()


class LikedUserViewSet(viewsets.ModelViewSet):
    queryset = LikedItemModel.objects.get_likes_for_type(User)
    serializer_class = LikedUserSerializer
    permission_classes = [permissions.IsAuthenticated]

    # def create(self, request):
    #     content_type = contentModel.ContentType.objects.get_for_model(obj_type)
