from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext, gettext_lazy as _
from django.contrib.contenttypes.admin import GenericTabularInline

from like.models import LikedItemModel


class UserInline(GenericTabularInline):
    autocomplete_fields = ['user']
    model = LikedItemModel


class UserAdmin(BaseUserAdmin):
    inlines = [UserInline]
    add_form_template = 'admin/auth/user/add_form.html'
    change_user_password_template = None
    fieldsets = (
        (None, {'fields': ('password',)}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email')}),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')
    search_fields = ('first_name', 'last_name', 'email')
    ordering = ('email',)
    filter_horizontal = ('groups', 'user_permissions',)

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'first_name', 'last_name'),
        }),
    )
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    ordering = ('email',)
