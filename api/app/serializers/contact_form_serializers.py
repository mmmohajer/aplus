from rest_framework import serializers

from app.models import *


class ContactFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactFormModel
        fields = ['id', 'uuid', 'name', 'phone_number', 'email',
                  'message', 'read', 'created_at', 'updated_at'] 
