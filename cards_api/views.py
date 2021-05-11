from rest_framework import generics
from .models import Pass
from .serializers import PassSerializer


class PassList(generics.ListAPIView):
    queryset = Pass.objects.all()
    serializer_class = PassSerializer


class PassDetail(generics.RetrieveAPIView):
    queryset = Pass.objects.all()
    serializer_class = PassSerializer
