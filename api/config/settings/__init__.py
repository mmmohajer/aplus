from config.settings.general import *
from config.settings.installed_apps import *
from config.settings.constants import *

if USE_CELERY:
    from config.settings.celery import *
