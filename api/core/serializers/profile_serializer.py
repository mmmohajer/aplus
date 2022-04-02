from rest_framework import serializers
from core.models import ProfileModel
from core.serializers.user_serializer import UserSerializer


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = ProfileModel
        fields = ['id', 'uuid', 'user', 'phone_number', 'birth_date',
                  'city', 'country', 'address', 'postal_code', 'photo', 'status']
