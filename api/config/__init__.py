import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

from django.conf import settings

if settings.USE_CELERY:
    from .celery import celery