import os
from datetime import timedelta

LANGUAGE_CODE = 'en-us'

TIME_ZONE = os.environ.get('API_TIME_ZONE', 'America/Toronto')

USE_I18N = True

USE_TZ = True


STATIC_URL = '/static/static/'
MEDIA_URL = '/static/media/'

MEDIA_ROOT = './vol/media'
STATIC_ROOT = './vol/static'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'core.User'

INTERNAL_IPS = ['127.0.0.1', 'localhost']

ADMIN_URL = f"api/{os.environ.get('ADMIN_URL', 'supersecreturl')}/"

SITE_HEADER_NAME = os.environ.get('SITE_HEADER_NAME', 'Rest Api')

REST_FRAMEWORK = {
    'COERCE_DECIMAL_TO_STRING': False,
    # 'PAGE_SIZE': 10,
    # 'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
}

SIMPLE_JWT = {
    'AUTH_HEADER_TYPES': ('JWT',),
    'ACCESS_TOKEN_LIFETIME': timedelta(days=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
}

DJOSER = {
    'SERIALIZERS': {
        'user_create': 'core.serializers.UserCreateSerializer',
        'current_user': 'core.serializers.UserSerializer',
        'user': 'core.serializers.UserSerializer'
    },
}

SEND_ACTIVATION_EMAIL = bool(int(os.environ.get('SEND_ACTIVATION_EMAIL', 0)))

EMAIL_BACKEND = os.environ.get('EMAIL_BACKEND', 'django.core.mail.backends.smtp.EmailBackend')
EMAIL_USE_TLS = os.environ.get('EMAIL_USE_TLS', False)
EMAIL_HOST = os.environ.get('EMAIL_HOST', 'smtp4dev')
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER', '')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD', '')
EMAIL_PORT = os.environ.get('EMAIL_PORT', 25)
DEFAULT_FROM_EMAIL = os.environ.get('DEFAULT_FROM_EMAIL', 'mmmohajer70@gmail.com')

USE_CELERY = bool(int(os.environ.get('USE_CELERY', 0)))


# ----------------------- Google Auth -----------------------
GOOGLE_AUTH_CLIENT_ID = os.environ.get(
    'GOOGLE_AUTH_CLIENT_ID', 'GOOGLE_AUTH_CLIENT_ID')
GOOGLE_AUTH_CLIENT_SECRET = os.environ.get(
    'GOOGLE_AUTH_CLIENT_SECRET', 'GOOGLE_AUTH_CLIENT_SECRET')
GOOGLE_OAUTH_REDIRECT_URI = os.environ.get(
    'GOOGLE_OAUTH_REDIRECT_URI', 'GOOGLE_OAUTH_REDIRECT_URI')
# -----------------------------------------------------------
