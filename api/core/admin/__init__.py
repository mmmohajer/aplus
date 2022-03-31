from django.conf import settings
from django.contrib import admin

from . import user, profile
from core.models import UserModel, ProfileModel

admin.site.site_header = settings.SITE_HEADER_NAME
admin.site.register(UserModel, user.UserAdmin)
admin.site.register(ProfileModel, profile.ProfileAdmin)
