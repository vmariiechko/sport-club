from rest_framework import serializers

from ..reservation_api.models import Reservation


class StaffReservationSerializer(serializers.ModelSerializer):

    member = serializers.CharField(source='subscription.member')
    status = serializers.CharField(source='get_status_display')
    reservedStart = serializers.DateTimeField(source='reserved_start')
    reservedEnd = serializers.DateTimeField(source='reserved_end')

    class Meta:
        model = Reservation
        fields = ('id', 'member', 'subscription', 'trainer', 'status', 'reservedStart', 'reservedEnd', 'updated')

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['member'] = str(instance.subscription.member.get_full_name())
        data['subscription'] = str(instance.subscription.card)
        data['trainer'] = instance.trainer.get_full_name() if data['trainer'] else 'Not assigned'
        return data
