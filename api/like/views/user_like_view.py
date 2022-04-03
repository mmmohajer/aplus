from rest_framework import permissions
from django.contrib.auth import get_user_model
from like.views.likeItem_view import LikeItemViewSet

from like.serializers import UserLikeSerializer
from like.views.likeItem_view import LikeItemViewSet

User = get_user_model()


class UserLikeViewSet(LikeItemViewSet):

    object_type = User
    serializer_class = UserLikeSerializer
    permission_classes = [permissions.IsAuthenticated]
