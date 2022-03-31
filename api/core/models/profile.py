from django.db import models
from django.conf import settings
from django.core.validators import FileExtensionValidator
from phonenumber_field.modelfields import PhoneNumberField

from core.models.general import TimeStampedUUIDModel


STATUS_CHOICES = [
    ('ACTIVE', 'ACTIVE'),
    ('DISABLE', 'DISABLE'),
    ('INACTIVE', 'INACTIVE')
]


class Profile(TimeStampedUUIDModel):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,
                                on_delete=models.CASCADE, related_name='profile')
    phone_number = PhoneNumberField(blank=True, null=True, max_length=15)
    birth_date = models.DateField(null=True, blank=True)
    city = models.CharField(null=True, blank=True, max_length=255)
    country = models.CharField(null=True, blank=True, max_length=255)
    address = models.CharField(null=True, blank=True, max_length=255)
    postal_code = models.CharField(null=True, blank=True, max_length=20)
    photo = models.FileField(upload_to='users/', null=True, blank=True,
                             validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png'])])
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, null=True, blank=True)

    def __str__(self):
        return self.user.email

    class Meta:
        verbose_name_plural = "Profiles"
        ordering = ('user__email',)
