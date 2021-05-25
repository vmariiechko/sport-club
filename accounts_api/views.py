from django.shortcuts import get_object_or_404

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenRefreshSerializer
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from drf_yasg.utils import swagger_auto_schema


from .serializers import (RegisterMemberSerializer, MemberDetailSerializer, ChangeMemberPasswordSerializer,
                          TokenObtainPairResponseSerializer, TokenRefreshResponseSerializer)
from .models import Member


class RegisterMemberView(APIView):
    """
    Create new user account.
    """

    permission_classes = [AllowAny]

    @swagger_auto_schema(request_body=RegisterMemberSerializer, responses={201: 'Created'})
    def post(self, request):
        serializer = RegisterMemberSerializer(data=request.data)
        if serializer.is_valid():
            member = serializer.save()
            if member:
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginMemberTokenObtainView(TokenObtainPairView):

    __doc__ = TokenObtainPairView.__doc__

    @swagger_auto_schema(responses={200: TokenObtainPairResponseSerializer})
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class LoginMemberTokenRefreshView(TokenRefreshView):

    __doc__ = TokenRefreshView.__doc__

    @swagger_auto_schema(responses={200: TokenRefreshResponseSerializer})
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class LogoutMemberView(APIView):
    """
    Logout the user. Move refresh token to blacklist.
    """

    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(request_body=TokenRefreshSerializer, responses={205: 'Reset Content'})
    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)


class ChangeMemberPasswordView(APIView):
    """
    Change the account owner password.
    """

    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(request_body=ChangeMemberPasswordSerializer, responses={200: 'OK'})
    def put(self, request):
        serializer = ChangeMemberPasswordSerializer(instance=request.user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MemberDetailViewSet(viewsets.ViewSet):
    """
    retrieve:
    Return the account owner information.

    update:
    Change the account owner information.
    """

    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(responses={200: MemberDetailSerializer})
    def retrieve(self, request, *args, **kwargs):
        serializer = MemberDetailSerializer(instance=request.user, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(request_body=MemberDetailSerializer, responses={200: MemberDetailSerializer})
    def update(self, request, *args, **kwargs):
        serializer = MemberDetailSerializer(instance=request.user, data=request.data,
                                            context={'request': request}, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
