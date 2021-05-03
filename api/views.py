from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class APIOverview(APIView):
    api_urls = {
        'Test': '/test-view/',
    }

    def get(self, request):
        return Response(self.api_urls)


class TestView(APIView):

    def get(self, request):
        return Response("Test view")
