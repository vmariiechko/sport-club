from django.utils import timezone

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework_simplejwt.views import TokenObtainPairView
from drf_yasg.utils import swagger_auto_schema

from ..accounts_api.models import Member
from ..accounts_api.serializers import TokenObtainPairResponseSerializer
from ..reservation_api.models import Reservation
from .serializers import StaffReservationSerializer


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


class StaffReservationsViewSet(viewsets.ViewSet):
    """
    list:
    Return all non-expired reservations.
    """

    permission_classes = [IsAdminUser]

    @swagger_auto_schema(responses={200: StaffReservationSerializer})
    def list(self, request):
        queryset = Reservation.objects.filter(reserved_end__gt=timezone.now())
        serializer = StaffReservationSerializer(queryset, many=True)
        if serializer.data:
            return Response(serializer.data, status=status.HTTP_200_OK)
        error = {'detail': 'There are no requested reservations'}
        return Response(error, status=status.HTTP_404_NOT_FOUND)
