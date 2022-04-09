from django.core.mail import EmailMessage, BadHeaderError
from rest_framework import viewsets, permissions, status, views, response, decorators, response, pagination
from django.shortcuts import render
from django.conf import settings
from templated_email import send_templated_mail


class SayHello(views.APIView):

    def get(self, request):
        try:
            send_templated_mail(
                template_name='hello',
                from_email='mmmohajer70@gmail.com',
                recipient_list=['admin@iswad.tech'],
                context={
                    'username': 'mmmohajer70',
                    'full_name': 'Mohammad Mohajer',
                    'signup_date': '2022-01-01'
                },
                # Optional:
                # cc=['cc@example.com'],
                # bcc=['bcc@example.com'],
                # headers={'My-Custom-Header':'Custom Value'},
                # template_prefix="my_emails/",
                # template_suffix="email",
            )
        except BadHeaderError:
            pass
        return response.Response("Hello")
