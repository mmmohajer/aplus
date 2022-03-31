from rest_framework import serializers
from core.models import ProfileModel


class ProfileSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(read_only=True)
    user_uuid = serializers.SerializerMethodField('get_user_uuid')

    def get_user_uuid(self, obj):
        return obj.user.uuid

    class Meta:
        model = ProfileModel
        fields = ['id', 'uuid', 'user_id', 'user_uuid', 'phone_number', 'birth_date',
                  'city', 'country', 'address', 'postal_code', 'photo', 'status']
        extra_fields = ['user_uuid']
