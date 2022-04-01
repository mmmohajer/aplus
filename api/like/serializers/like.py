from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.contenttypes import models as contentModel

from like.models import LikedItemModel

User = get_user_model()


class LikedUserSerializer(serializers.ModelSerializer):
    # user_id = serializers.IntegerField()
    # content_type_id = serializers.IntegerField()
    user_uuid = serializers.SerializerMethodField('get_user_uuid')

    def get_user_uuid(self, obj):
        return obj.user.uuid

    def create(self, validated_data):
        content_type = contentModel.ContentType.objects.get_for_model(User)
        content_type_id = content_type.id
        user_id = self.context["request"].user.id
        object_id = validated_data["object_id"]
        liked_user = LikedItemModel.objects.create(
            content_type_id=content_type_id, user_id=user_id, object_id=object_id)
        return liked_user

    class Meta:
        model = LikedItemModel
        fields = ['id', 'uuid', 'user_id', 'user_uuid', 'content_type_id', 'object_id']
        extra_fields = ['user_uuid']
