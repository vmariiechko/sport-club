from django.shortcuts import get_object_or_404

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import RegisterMemberSerializer, MemberDetailSerializer, ChangeMemberPasswordSerializer
from .models import Member


class RegisterMember(APIView):

    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterMemberSerializer(data=request.data)
        if serializer.is_valid():
            member = serializer.save()
            if member:
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenView(APIView):

    permission_classes = [AllowAny]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)


class MemberDetailViewSet(viewsets.ViewSet):

    permission_classes = [IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        serializer = MemberDetailSerializer(instance=request.user, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        serializer = MemberDetailSerializer(instance=request.user, data=request.data,
                                            context={'request': request}, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChangeMemberPassword(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request):
        serializer = ChangeMemberPasswordSerializer(instance=request.user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
