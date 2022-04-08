from celery.schedules import crontab

CELERY_BROKER_URL = 'redis://192.168.2.64:6379/1'

CELERY_BEAT_SCHEDULE = {
    'notify_customers': {
        'task': 'core.tasks.notify_customers',
        'schedule': 5,
        'args': ['Hellow World!'],
    }
}
