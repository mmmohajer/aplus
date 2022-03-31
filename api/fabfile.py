import re
import os

import django
from fabric.api import local
from fabric.operations import prompt

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.conf import settings
from core import utils as coreUtils


MANAGE_CALL = 'python manage.py'

def createNewGroup():
    coreUtils.createNewGroup()