from django.utils import timezone
from rest_framework import serializers

from ..subscription_api.views import get_subscription_object
from .models import Reservation


class CreateReservationSerializer(serializers.ModelSerializer):

    subscription = serializers.PrimaryKeyRelatedField(read_only=True)
    reservedStart = serializers.DateTimeField(source='reserved_start')
    reservedEnd = serializers.DateTimeField(source='reserved_end')

    class Meta:
        model = Reservation
        fields = ('subscription', 'reservedStart', 'reservedEnd')

    def validate(self, attrs):

        member = self.context['request'].user
        subscription = get_subscription_object(member)
        attrs['subscription'] = subscription

        reserved_start = attrs['reserved_start']
        reserved_end = attrs['reserved_end']

        if reserved_start > subscription.expires:
            raise serializers.ValidationError({"reservedStart": "Must come before subscription expires date-time"})

        if reserved_start < timezone.now():
            raise serializers.ValidationError({"reservedStart": "Must be future date-time"})
        elif reserved_start > reserved_end:
            raise serializers.ValidationError({"reservedEnd": "Must come after reservation start date-time"})

        delta = reserved_end - reserved_start
        if not timezone.timedelta(hours=1) < delta < timezone.timedelta(hours=10):
            raise serializers.ValidationError({"reservedRange": "The date-time difference between reservations "
                                                                "must be from 1 to 10 hours"})
        return attrs


class ReservationListSerializer(serializers.ModelSerializer):

    status = serializers.CharField(source='get_status_display')
    reservedStart = serializers.DateTimeField(source='reserved_start')
    reservedEnd = serializers.DateTimeField(source='reserved_end')

    class Meta:
        model = Reservation
        fields = ('trainer', 'status', 'reservedStart', 'reservedEnd', 'updated')

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['trainer'] = instance.trainer.get_full_name() if data['trainer'] else 'Not assigned'
        return data
