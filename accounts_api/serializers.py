from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from .models import Member


class RegisterMemberSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    firstName = serializers.CharField(source='first_name', required=True)
    lastName = serializers.CharField(source='last_name', required=True)
    phone = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Member
        fields = ('email', 'firstName', 'lastName', 'phone', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "The password fields didn't match."})
        return attrs

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        password2 = validated_data.pop('password2', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class ChangeMemberPasswordSerializer(serializers.ModelSerializer):

    oldPassword = serializers.CharField(write_only=True, required=True)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Member
        fields = ('oldPassword', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({'password': "The password fields didn't match."})
        return attrs

    def validate_oldPassword(self, value):
        if not self.instance.check_password(value):
            raise serializers.ValidationError('Old password is not correct')
        return value

    def update(self, instance, validated_data):
        instance.set_password(validated_data['password'])
        instance.save()
        return instance


class MemberDetailSerializer(serializers.ModelSerializer):

    firstName = serializers.CharField(source='first_name')
    lastName = serializers.CharField(source='last_name')

    class Meta:
        model = Member
        fields = ('email', 'firstName', 'lastName', 'phone', 'avatar')
        extra_kwargs = {'avatar': {'read_only': True}}
