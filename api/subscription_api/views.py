from django.utils import timezone

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound
from drf_yasg.utils import swagger_auto_schema

from ..cards_api.serializers import PassNameSerializer
from .serializers import SubscriptionSerializer
from .models import Subscription


def get_subscription_object(member):
    try:
        return Subscription.objects.get(member=member, expires__gt=timezone.now(), visits_count__gt=0)
    except Subscription.DoesNotExist:
        raise NotFound(detail=f"The {member} doesn't have an active subscription")


class SubscriptionViewSet(viewsets.ViewSet):
    """
    retrieve:
    Return the client's active subscription.

    create:
    Create a new subscription for client.
    """

    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(responses={200: SubscriptionSerializer})
    def retrieve(self, request):
        instance = get_subscription_object(request.user)
        serializer = SubscriptionSerializer(instance=instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(request_body=PassNameSerializer, responses={201: SubscriptionSerializer})
    def create(self, request):
        data = {
            'member': request.user,
            **request.data
        }
        serializer = SubscriptionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
