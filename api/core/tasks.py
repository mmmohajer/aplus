from celery import shared_task
from templated_email import send_templated_mail
from django.core.mail import BadHeaderError

# ----------------------------------------------
# Periodic Tasks
# ----------------------------------------------


# @shared_task
# def test_periodic_task(first_name, last_name):
#     print(f"{first_name} {last_name}")
#     return

# ----------------------------------------------
# Send Emails
# ----------------------------------------------

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


@shared_task
def send_reset_password_email(first_name, email, code):
    try:
        send_templated_mail(
            template_name='reset_password',
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

# ----------------------------------------------
# ----------------------------------------------
# ----------------------------------------------
