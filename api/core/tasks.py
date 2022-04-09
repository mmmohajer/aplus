from time import sleep
from celery import shared_task
from templated_email import send_templated_mail
from django.core.mail import BadHeaderError


@shared_task
def notify_customers(message):
    print('Sending 10k emails...')
    print(message)
    sleep(10)
    print('Emails were successfully sent!')


@shared_task
def send_activation_email(first_name, email, code):
    try:
        send_templated_mail(
            template_name='activation',
            from_email='mmmohajer70@gmail.com',
            recipient_list=[email],
            context={
                'first_name': first_name,
                'code': code,
            },
        )
    except BadHeaderError:
        pass
    return
