from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.contenttypes import models as contentModel

from like.models import LikedItemModel
from core.serializers import UserSerializer

User = get_user_model()


class UserLikeSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    object_id = serializers.IntegerField(write_only=True)
    liked_user = serializers.SerializerMethodField(method_name="get_liked_user")

    def get_liked_user(self, obj):
        user_queryset = User.objects.filter(id=obj.object_id).first()
        serializer = UserSerializer(user_queryset)
        return serializer.data

    def create(self, validated_data):
        content_type = contentModel.ContentType.objects.get_for_model(User)
        content_type_id = content_type.id
        user_id = self.context["request"].user.id
        object_id = validated_data["object_id"]
        like_queryset = LikedItemModel.objects.filter(
            content_type_id=content_type_id, user_id=user_id, object_id=object_id)
        if like_queryset.count() > 0:
            liked_user = like_queryset.first()
        else:
            liked_user = LikedItemModel.objects.create(
                content_type_id=content_type_id, user_id=user_id, object_id=object_id)
        return liked_user

    class Meta:
        model = LikedItemModel
        fields = ['id', 'uuid', 'user', 'object_id', 'liked_user']
