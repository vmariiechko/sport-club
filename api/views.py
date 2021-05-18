from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response


class APIOverview(APIView):
    api_urls = {
        'Post List': '/posts/',
        'Post': '/posts/{id}/',
        'Pass List': '/passes/',
        'Pass': '/passes/{id}/',
        'Register User': '/users/register/',
        'Logout User': '/users/logout/',
        'Login User': '/token/',
        'Get new Access Token': '/token/refresh/',
    }

    def get(self, request):
        return Response(self.api_urls)
