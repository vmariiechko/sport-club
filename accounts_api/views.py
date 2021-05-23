from django.shortcuts import get_object_or_404

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import RegisterMemberSerializer, MemberDetailSerializer
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

    def get_object(self, email):
        queryset = Member.objects.all()
        return get_object_or_404(queryset, email=email)

    def retrieve(self, request, *args, **kwargs):
        member = self.get_object(request.user)
        serializer = MemberDetailSerializer(instance=member, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)
