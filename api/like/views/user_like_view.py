from rest_framework import viewsets, permissions, status, views, response, decorators, response
from django.contrib.auth import get_user_model

from core.permissions import *
from like.models import *
from like.serializers import *

User = get_user_model()


class UserLikeViewSet(viewsets.ModelViewSet):
    queryset = LikedItemModel.objects.get_likes_for_type(User)
    serializer_class = UserLikeSerializer
    permission_classes = [IsAdminOrReadOnly]

    @decorators.action(detail=False, methods=["GET"])
    def likedme(self, request):
        like_queryset = LikedItemModel.objects.select_related(
            'user').filter(object_id=request.user.id)
        serializer = UserLikeSerializer(like_queryset, many=True)
        return response.Response(status=status.HTTP_200_OK, data=serializer.data)

    @decorators.action(detail=False, methods=["GET", "POST"], permission_classes=[permissions.IsAuthenticated])
    def whoilike(self, request, *args, **kwargs):
        if request.method == "GET":
            like_queryset = LikedItemModel.objects.select_related(
                'user').filter(user_id=request.user.id)
            serializer = UserLikeSerializer(like_queryset, many=True)
            return response.Response(status=status.HTTP_200_OK, data=serializer.data)
        elif request.method == "POST":
            serializer = UserLikeSerializer(data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return response.Response(status=status.HTTP_201_CREATED, data=serializer.data)

    @decorators.action(detail=True, methods=["GET", "DELETE"], permission_classes=[permissions.IsAuthenticated])
    def wholikeme(self, request, pk=None):
        queryset = self.get_object()
        is_user_like = False
        if request.user.id == queryset.user.id:
            is_user_like = True
        if is_user_like:
            if request.method == "GET":
                serializer = UserLikeSerializer(queryset)
                return response.Response(status=status.HTTP_200_OK, data=serializer.data)
            elif request.method == "DELETE":
                queryset.delete()
                return response.Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return response.Response(status=status.HTTP_401_UNAUTHORIZED, data={"Error": "Unauthorized"})
