from django.contrib.auth import get_user_model

from like.serializers.likeItem_serializer import LikeItemSerializer
from core.serializers import UserSerializer

User = get_user_model()


class UserLikeSerializer(LikeItemSerializer):
    object_type = User
    object_type_serializer = UserSerializer
