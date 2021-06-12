from django.utils import timezone
from django.shortcuts import get_object_or_404

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework_simplejwt.views import TokenObtainPairView
from drf_yasg.utils import swagger_auto_schema

from ..accounts_api.models import Member
from ..accounts_api.serializers import TokenObtainPairResponseSerializer
from ..reservation_api.models import Reservation
from ..subscription_api.models import Subscription
from .serializers import StaffReservationSerializer, StaffSubscriptionSerializer


class LoginStaffTokenObtainView(TokenObtainPairView):
    """
    Takes a set of staff credentials and returns an access and refresh JSON web
    token pair to prove the authentication of those credentials.
    """

    @swagger_auto_schema(responses={200: TokenObtainPairResponseSerializer})
    def post(self, request, *args, **kwargs):

        try:
            queryset = Member.objects.all()
            staff = queryset.get(email=request.data['email'])
        except KeyError:
            error = {'detail': 'The email field is required.'}
            return Response(error, status=status.HTTP_400_BAD_REQUEST)
        except Member.DoesNotExist:
            error = {'detail': 'No active account found with the given credentials.'}
            return Response(error, status=status.HTTP_401_UNAUTHORIZED)

        if not staff.is_staff:
            error = {'detail': 'Please enter the correct email address and password for a staff account!'}
            return Response(error, status=status.HTTP_401_UNAUTHORIZED)

        return super().post(request, *args, **kwargs)


class StaffReservationViewSet(viewsets.ViewSet):
    """
    list:
    Return all non-expired reservations.

    update:
    Modify the reservation information.
    """

    permission_classes = [IsAdminUser]

    def get_queryset(self):
        return Reservation.objects.filter(reserved_end__gt=timezone.now())

    def get_object(self, pk):
        queryset = self.get_queryset()
        return get_object_or_404(queryset, pk=pk)

    @swagger_auto_schema(responses={200: StaffReservationSerializer})
    def list(self, request):
        queryset = self.get_queryset()
        serializer = StaffReservationSerializer(queryset, many=True)
        if serializer.data:
            return Response(serializer.data, status=status.HTTP_200_OK)
        error = {'detail': 'There are no requested reservations.'}
        return Response(error, status=status.HTTP_404_NOT_FOUND)

    @swagger_auto_schema(request_body=StaffReservationSerializer, responses={200: StaffReservationSerializer})
    def update(self, request, pk):
        reservation = self.get_object(pk)
        serializer = StaffReservationSerializer(instance=reservation, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StaffSubscriptionViewSet(viewsets.ViewSet):
    """
    list:
    Return all members with an active subscription.

    update:
    Modify the visits count for a member with an active subscription.
    """

    permission_classes = [IsAdminUser]

    def get_queryset(self):
        return Subscription.objects.filter(expires__gt=timezone.now(), visits_count__gt=0)

    def get_object(self, pk):
        queryset = self.get_queryset()
        return get_object_or_404(queryset, pk=pk)

    @swagger_auto_schema(responses={200: StaffSubscriptionSerializer})
    def list(self, request):
        queryset = self.get_queryset()
        serializer = StaffSubscriptionSerializer(queryset, many=True)
        if serializer.data:
            return Response(serializer.data, status=status.HTTP_200_OK)
        error = {'detail': 'There are no members with an active subscription.'}
        return Response(error, status=status.HTTP_404_NOT_FOUND)

    @swagger_auto_schema(request_body=StaffSubscriptionSerializer, responses={200: StaffSubscriptionSerializer})
    def update(self, request, pk):
        subscription = self.get_object(pk)
        serializer = StaffSubscriptionSerializer(instance=subscription, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
