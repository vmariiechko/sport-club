from rest_framework import serializers
from .models import Pass


class PassSerializer(serializers.ModelSerializer):

    visitsCount = serializers.IntegerField(source='visits_count', read_only=True)
    withTrainer = serializers.BooleanField(source='with_trainer', read_only=True)
    pricePerMonth = serializers.IntegerField(source='price_per_month', read_only=True)

    class Meta:
        model = Pass
        fields = ('id', 'name', 'title', 'image', 'descripion', 'visitsCount', 'withTrainer', 'pricePerMonth')


class PassNameSerializer(serializers.ModelSerializer):

    card = serializers.CharField(source='name')

    class Meta:
        model = Pass
        fields = ('card',)
