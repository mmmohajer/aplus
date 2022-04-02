from django.conf import settings
from django.contrib import admin

from . import user_admin, profile_admin
from core.models import UserModel, ProfileModel

admin.site.site_header = settings.SITE_HEADER_NAME
admin.site.register(UserModel, user_admin.UserAdmin)
admin.site.register(ProfileModel, profile_admin.ProfileAdmin)
