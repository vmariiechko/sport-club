from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from drf_yasg.utils import swagger_auto_schema

from ..accounts_api.models import Member
from ..accounts_api.serializers import TokenObtainPairResponseSerializer


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
