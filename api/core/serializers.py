from tokenize import group
from djoser.serializers import UserSerializer as BaseUserSerializer, UserCreateSerializer as BaseUserCreateSerializer
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group

User = get_user_model()


class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'uuid', 'first_name', 'last_name', 'email', 'password']

    def create(self, validated_data):
        user, created = User.objects.update_or_create(
            email=validated_data["email"], defaults={**validated_data})
        if created:
            group = Group.objects.filter(name="Subscriber").first()
            group.user_set.add(user)
        return user


class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'uuid', 'first_name', 'last_name', 'email']
