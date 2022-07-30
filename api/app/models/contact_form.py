from django.db import models
from django.conf import settings
from django.core.validators import FileExtensionValidator
from phonenumber_field.modelfields import PhoneNumberField

from core.models.general import TimeStampedUUIDModel



class ContactForm(TimeStampedUUIDModel):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone_number = PhoneNumberField(max_length=15)
    message = models.TextField(blank=True, null=True)
    read = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Contact Forms"
        ordering = ('-created_at', 'read')