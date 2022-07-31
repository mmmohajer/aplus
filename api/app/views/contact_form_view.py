from rest_framework import viewsets, permissions, status, views, response, decorators, response
from django.contrib.auth import get_user_model

from core.permissions import *
from app.models import *
from app.serializers import *
from core.pagination import PaginationType1
from core.views import ProtectedCRUDViewSet



class ContactFormViewSet(ProtectedCRUDViewSet):
    queryset = ContactFormModel.objects.all()
    serializer_class = ContactFormSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = PaginationType1

    def get_queryset(self):
        user_groups_queryset = self.request.user.groups.all()
        cur_user_groups = [group.name for group in list(user_groups_queryset)]
        if "Admin" in cur_user_groups:
            return ContactFormModel.objects.all() 
        else: 
            return []


    def destroy(self, request, pk=None):
        instance = self.get_object()
        instance_user_id = ""
        return self.protected_delete(request, instance, instance_user_id, pk)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance_user_id = ""
        queryset = ContactFormModel.objects.filter(id=instance.id)
        if queryset.count() > 0:
            return self.protected_update(request, instance, instance_user_id, *args, **kwargs)
        return response.Response(status=status.HTTP_400_BAD_REQUEST)