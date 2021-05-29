from django.shortcuts import render

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema

from ..cards_api.serializers import PassNameSerializer
from .serializers import SubscriptionSerializer


class SubscriptionViewSet(viewsets.ViewSet):

    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(request_body=PassNameSerializer, responses={201: 'Created'})
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
