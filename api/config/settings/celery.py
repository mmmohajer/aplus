from celery.schedules import crontab

CELERY_BROKER_URL = 'redis://redis:6379/1'

CELERY_BEAT_SCHEDULE = {}

# CELERY_BEAT_SCHEDULE = {
#     'notify_customers': {
#         'task': 'core.tasks.notify_customers',
#         'schedule': 5*60,
#         'args': ['Hellow World!'],
#     }
# }
