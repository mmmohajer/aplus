from django.contrib import admin


class UserLikeAdmin(admin.ModelAdmin):
    autocomplete_fields = ['user']
    list_per_page = 10
    list_select_related = ['user']
    search_fields = ['user__email__istartswith']
    list_filter = ['content_type']
