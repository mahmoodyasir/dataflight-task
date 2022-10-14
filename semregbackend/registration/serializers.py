from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import *
from rest_framework.authtoken.models import Token


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'email')
        extra_kwargs = {"password": {"write_only": True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        Profile.objects.create(prouser=user)
        return user


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta :
        model = Registration
        fields = '__all__'

