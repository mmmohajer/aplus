from rest_framework import viewsets, permissions, status, views, response, decorators, response
from django.contrib.auth import get_user_model

from core.permissions import *
from core.views import ProtectedCRUDViewSet
from like.models import *
from like.serializers import *

User = get_user_model()


class LikeItemViewSet(ProtectedCRUDViewSet):

    def get_queryset(self):
        return LikedItemModel.objects.get_likes_for_type(self.object_type)

    def destroy(self, request, pk=None):
        instance = self.get_object()
        instance_user_id = instance.user.id
        return self.protected_delete(request, instance, instance_user_id, pk)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance_user_id = instance.user.id
        object_id = request.data["object_id"]
        queryset = self.object_type.objects.filter(id=object_id)
        if queryset.count() > 0:
            return self.protected_update(request, instance, instance_user_id, *args, **kwargs)
        return response.Response(status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        object_id = request.data["object_id"]
        queryset = self.object_type.objects.filter(id=object_id)
        if queryset.count() > 0:
            serializer = self.serializer_class(
                data=request.data, context={'request': request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return response.Response(status=status.HTTP_201_CREATED, data=serializer.data)
        return response.Response(status=status.HTTP_400_BAD_REQUEST)

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
