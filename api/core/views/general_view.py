from rest_framework import viewsets, permissions, status, views, response, decorators, response
from django.contrib.auth import get_user_model

from core.permissions import *
from like.models import *
from like.serializers import *

User = get_user_model()


class ProtectedCRUDViewSet(viewsets.ModelViewSet):

    def protected_delete(self, request, instance, instance_user_id, pk=None):
        user_groups_queryset = request.user.groups.all()
        cur_user_groups = [group.name for group in list(user_groups_queryset)]
        if request.user.id == instance_user_id or "Admin" in cur_user_groups:
            instance.delete()
            return response.Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return response.Response(status=status.HTTP_401_UNAUTHORIZED, data={"message": "Unauthorized"})

    def protected_update(self, request, instance, instance_user_id, *args, **kwargs):
        user_groups_queryset = request.user.groups.all()
        cur_user_groups = [group.name for group in list(user_groups_queryset)]
        if request.user.id == instance_user_id or "Admin" in cur_user_groups:
            serializer = self.serializer_class(instance, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return response.Response(status=status.HTTP_200_OK, data=serializer.data)
        else:
            return response.Response(status=status.HTTP_401_UNAUTHORIZED, data={"message": "Unauthorized"})
