from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response


class APIOverview(APIView):
    api_urls = {
        'Posts': '/posts',
        'Posts detail': '/posts/{id}'
    }

    def get(self, request):
        return Response(self.api_urls)
