from django.contrib import admin

from . import user_like_admin
from like.models import LikedItemModel

admin.site.register(LikedItemModel, user_like_admin.UserLikeAdmin)
