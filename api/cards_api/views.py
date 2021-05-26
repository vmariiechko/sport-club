from rest_framework import generics
from .models import Pass
from .serializers import PassSerializer


class PassListView(generics.ListAPIView):
    """
    Return a list of all the available passes (cards).
    """

    queryset = Pass.objects.all()
    serializer_class = PassSerializer


class PassDetailView(generics.RetrieveAPIView):
    """
    Return the given pass (card).
    """

    queryset = Pass.objects.all()
    serializer_class = PassSerializer
