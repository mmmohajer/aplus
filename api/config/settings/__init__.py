from config.settings.general import *
from config.settings.installed_apps import *
from config.settings.constants import *

if USE_CELERY:
    from config.settings.celery import *

if DEBUG:
    if not os.environ.get('DB_HOST') or os.environ.get('DB_HOST') == 'localhost':
        print("Hello")
        MIDDLEWARE.append('corsheaders.middleware.CorsMiddleware')
        CORS_ALLOWED_ORIGINS = ['http://localhost:3000']
        INSTALLED_APPS.append('corsheaders')
