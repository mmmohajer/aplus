from django.contrib import admin

from . import contact_form_admin
from app.models import ContactFormModel

admin.site.register(ContactFormModel, contact_form_admin.ContactFormAdmin)