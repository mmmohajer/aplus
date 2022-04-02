from django.db import models
from django.conf import settings
from django.contrib.contenttypes import models as contentModel, fields as contentFields

from core.models.general import TimeStampedUUIDModel


class LikedItemManager(models.Manager):
    def get_likes_for_obj(self, obj_type, obj_id):
        content_type = contentModel.ContentType.objects.get_for_model(obj_type)
        queryset = LikedItem.objects.filter(content_type=content_type, object_id=obj_id)
        return queryset

    def get_likes_for_type(self, obj_type):
        content_type = contentModel.ContentType.objects.get_for_model(obj_type)
        queryset = LikedItem.objects.filter(content_type=content_type)
        return queryset


class LikedItem(TimeStampedUUIDModel):
    objects = LikedItemManager()
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, related_name='liked_item')
    content_type = models.ForeignKey(
        contentModel.ContentType, on_delete=models.CASCADE, related_name='liked_item')
    object_id = models.PositiveIntegerField()
    content_object = contentFields.GenericForeignKey()

    def __str__(self):
        return f"{self.user} liked for {self.content_type} with id {self.object_id}"

    class Meta:
        ordering = ('object_id',)
