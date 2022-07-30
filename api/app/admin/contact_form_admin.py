from django.contrib import admin




class ContactFormAdmin(admin.ModelAdmin):

    list_display = ['name', 'email', 'read', 'created_at']
    list_editable = ['read']
    list_per_page = 10
    search_fields = ['name__istartswith', 'email__istartswith']
    list_filter = ['read']