from django.utils import timezone
from django.shortcuts import get_object_or_404

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema

from .serializers import CreateReservationSerializer, ReservationSerializer
from .models import Reservation


class ReservationViewSet(viewsets.ViewSet):
    """
    list:
    Return a list of all the future client reservations.

    create:
    Create a new client reservation.

    retrieve:
    Return the future client reservation.

    destroy:
    Delete the future client reservation.
    """

    permission_classes = [IsAuthenticated]

    def get_object(self, member, pk):
        queryset = Reservation.objects.filter(subscription__member=member, reserved_end__gt=timezone.now())
        return get_object_or_404(queryset, pk=pk)

    @swagger_auto_schema(responses={200: ReservationSerializer})
    def list(self, request):
        queryset = Reservation.objects.filter(subscription__member=request.user, reserved_end__gt=timezone.now())
        serializer = ReservationSerializer(queryset, many=True)
        if serializer.data:
            return Response(serializer.data, status=status.HTTP_200_OK)
        error = {'detail': f"The {request.user} doesn't have reservations"}
        return Response(error, status=status.HTTP_404_NOT_FOUND)

    @swagger_auto_schema(request_body=CreateReservationSerializer, responses={201: CreateReservationSerializer})
    def create(self, request):
        serializer = CreateReservationSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(responses={200: ReservationSerializer})
    def retrieve(self, request, pk):
        instance = self.get_object(request.user, pk)
        serializer = ReservationSerializer(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(responses={200: 'OK'})
    def destroy(self, request, pk):
        instance = self.get_object(request.user, pk)
        instance.delete()
        return Response(status=status.HTTP_200_OK)
