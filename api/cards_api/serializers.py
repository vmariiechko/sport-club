from rest_framework import serializers
from .models import Pass


class PassSerializer(serializers.ModelSerializer):

    pricePerMonth = serializers.IntegerField(source='price_per_month', read_only=True)

    class Meta:
        model = Pass
        fields = ('id', 'name', 'title', 'image', 'descripion',  'pricePerMonth')
