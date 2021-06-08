from django.utils import timezone
from rest_framework import serializers

from ..accounts_api.models import Member
from ..cards_api.models import Pass
from .models import Subscription


class SubscriptionSerializer(serializers.ModelSerializer):

    member = serializers.SlugRelatedField(queryset=Member.objects.all(), slug_field='email')
    card = serializers.SlugRelatedField(queryset=Pass.objects.all(), slug_field='name')

    class Meta:
        model = Subscription
        fields = ('member', 'card', 'visits_count', 'purchased', 'expires')
        extra_kwargs = {
            'visits_count': {'read_only': True},
            'purchased': {'read_only': True},
            'expires': {'read_only': True}
        }

    def validate_member(self, value):
        if Subscription.objects.filter(member=value, expires__gt=timezone.now(), visits_count__gt=0).exists():
            raise serializers.ValidationError("You already have an active subscription")
        return value

    def create(self, validated_data):
        instance = super().create(validated_data)
        instance.visits_count = validated_data['card'].visits_count
        instance.save()
        return instance
