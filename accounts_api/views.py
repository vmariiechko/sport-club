from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .serializers import RegisterMemberSerializer


class RegisterMember(APIView):

    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = RegisterMemberSerializer(data=request.data)
        if reg_serializer.is_valid():
            member = reg_serializer.save()
            if member:
                return Response(status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)