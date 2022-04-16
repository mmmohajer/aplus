from django.conf import settings

if settings.USE_CELERY:
    from .celery import celery
