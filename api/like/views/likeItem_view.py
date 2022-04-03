from rest_framework import viewsets, permissions, status, views, response, decorators, response
from django.contrib.auth import get_user_model

from core.permissions import *
from like.models import *
from like.serializers import *

User = get_user_model()


class LikeItemViewSet(viewsets.ModelViewSet):

    def get_queryset(self):
        return LikedItemModel.objects.get_likes_for_type(self.object_type)

    def destroy(self, request, pk=None):
        instance = self.get_object()
        user_groups_queryset = request.user.groups.all()
        cur_user_groups = [group.name for group in list(user_groups_queryset)]
        if request.user.id == instance.user.id or "Admin" in cur_user_groups:
            instance.delete()
            return response.Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return response.Response(status=status.HTTP_401_UNAUTHORIZED, data={"Error": "Unauthorized"})

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        user_groups_queryset = request.user.groups.all()
        cur_user_groups = [group.name for group in list(user_groups_queryset)]
        if request.user.id == instance.user.id or "Admin" in cur_user_groups:
            serializer = self.serializer_class(instance, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return response.Response(status=status.HTTP_200_OK, data=serializer.data)
        else:
            return response.Response(status=status.HTTP_401_UNAUTHORIZED, data={"Error": "Unauthorized"})

    # CUSTOM ACTIONS:

    # @decorators.action(detail=False, methods=["GET"])
    # def currentitemlikes(self, request):
    #     like_queryset = LikedItemModel.objects.select_related(
    #         'user').filter(object_id=request.user.id)
    #     serializer = self.serializer_class(like_queryset, many=True)
    #     return response.Response(status=status.HTTP_200_OK, data=serializer.data)

    # @decorators.action(detail=False, methods=["GET", "POST"], permission_classes=[permissions.IsAuthenticated])
    # def whatilike(self, request, *args, **kwargs):
    #     if request.method == "GET":
    #         like_queryset = LikedItemModel.objects.select_related(
    #             'user').filter(user_id=request.user.id)
    #         serializer = self.serializer_class(like_queryset, many=True)
    #         return response.Response(status=status.HTTP_200_OK, data=serializer.data)
    #     elif request.method == "POST":
    #         serializer = self.serializer_class(data=request.data, context={'request': request})
    #         serializer.is_valid(raise_exception=True)
    #         serializer.save()
    #         return response.Response(status=status.HTTP_201_CREATED, data=serializer.data)

    # @decorators.action(detail=True, methods=["GET", "DELETE"], permission_classes=[permissions.IsAuthenticated])
    # def currentlike(self, request, pk=None):
    #     queryset = self.get_object()
    #     is_current_item_liked = False
    #     if self.current_item.id == queryset.object_id:
    #         is_current_item_liked = True
    #     if is_current_item_liked:
    #         if request.method == "GET":
    #             serializer = self.serializer_class(queryset)
    #             return response.Response(status=status.HTTP_200_OK, data=serializer.data)
    #         elif request.method == "DELETE":
    #             queryset.delete()
    #             return response.Response(status=status.HTTP_204_NO_CONTENT)
    #     else:
    #         return response.Response(status=status.HTTP_401_UNAUTHORIZED, data={"Error": "Unauthorized"})
