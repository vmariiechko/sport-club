from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.reverse import reverse
from drf_yasg.utils import swagger_auto_schema


class APIOverview(APIView):
    """
    Return all available endpoints.
    """

    api_urls = {
        'Post List': '/posts/',
        'Post': '/posts/{id}/',
        'Pass List': '/passes/',
        'Pass': '/passes/{id}/',
        'Register User': '/users/register/',
        'Logout User': '/users/logout/',
        'Login User': '/users/login/',
        'Get new Access Token': '/users/login/refresh/',
        'Get User Data': '/users/me/',
        'Update User Data': '/users/me/',
        'Change User Password': '/users/me/password',
    }

    @swagger_auto_schema(responses={200: 'OK'})
    def get(self, request):

        docs = {'API Documentation': reverse('api:schema-swagger-ui', request=request)}
        return Response({**docs, **self.api_urls})
