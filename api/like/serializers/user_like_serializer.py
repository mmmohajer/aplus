from django.contrib.auth import get_user_model

from like.serializers.likeItem_serializer import LikeItemSerializer

User = get_user_model()


class UserLikeSerializer(LikeItemSerializer):
    object_type = User
