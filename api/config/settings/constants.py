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
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
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
    }
}

SEND_ACTIVATION_EMAIL = False
