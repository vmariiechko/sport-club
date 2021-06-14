from django.utils import timezone
from rest_framework import serializers
from ..reservation_api.models import Reservation
from ..subscription_api.models import Subscription


class StaffChoiseField(serializers.ChoiceField):

    class Meta:
        swagger_schema_fields = {
            'type': 'integer'
        }


class StaffReservationSerializer(serializers.ModelSerializer):

    member = serializers.CharField(source='subscription.member', read_only=True)
    status = StaffChoiseField(Reservation.STATUS, required=False)
    reservedStart = serializers.DateTimeField(source='reserved_start')
    reservedEnd = serializers.DateTimeField(source='reserved_end')

    class Meta:
        model = Reservation
        fields = ('id', 'member', 'subscription', 'trainer', 'status', 'reservedStart', 'reservedEnd', 'updated')
        extra_kwargs = {'subscription': {'read_only': True}}

    def validate(self, attrs):

        reserved_start = attrs['reserved_start']
        reserved_end = attrs['reserved_end']

        if reserved_start < self.instance.reserved_start:
            raise serializers.ValidationError({"reservedStart": "Must come after requested "
                                                                "reservation start date-time"})

        if reserved_end > self.instance.reserved_end:
            raise serializers.ValidationError({"reservedEnd": "Must come before requested "
                                                              "reservation end date-time"})

        if reserved_start > reserved_end:
            raise serializers.ValidationError({"reservedEnd": "Must come after reservation start date-time"})

        delta = reserved_end - reserved_start
        if delta < timezone.timedelta(minutes=30):
            raise serializers.ValidationError({"reservedRange": "The date-time difference between reservations "
                                                                "must be at least 30 minutes"})

        return attrs

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['member'] = str(instance.subscription.member.get_full_name())
        data['subscription'] = str(instance.subscription.card)
        data['trainer'] = instance.trainer.get_full_name() if data['trainer'] else 'Not assigned'
        data['status'] = str(instance.get_status_display())
        return data


class StaffSubscriptionSerializer(serializers.ModelSerializer):

    email = serializers.CharField(source="member.email", read_only=True)

    class Meta:
        model = Subscription
        fields = ('id', 'email', 'member', 'card', 'visits_count', 'purchased', 'expires')
        extra_kwargs = {
            'member': {'read_only': True},
            'card': {'read_only': True},
            'visits_count': {'required': True},
            'purchased': {'read_only': True},
            'expires': {'read_only': True}
        }

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['member'] = instance.member.get_full_name()
        data['card'] = str(instance.card)
        return data
