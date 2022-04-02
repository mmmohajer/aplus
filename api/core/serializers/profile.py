from rest_framework import serializers
from core.models import ProfileModel
from core.serializers.user import UserSerializer


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = ProfileModel
        fields = ['id', 'uuid', 'user', 'phone_number', 'birth_date',
                  'city', 'country', 'address', 'postal_code', 'photo', 'status']
