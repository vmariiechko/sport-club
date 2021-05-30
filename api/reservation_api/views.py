from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema

from .serializers import CreateReservationSerializer


class CreateReservationView(APIView):
    """
    Create a new client reservation.
    """

    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(request_body=CreateReservationSerializer, responses={201: CreateReservationSerializer})
    def post(self, request):
        serializer = CreateReservationSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
