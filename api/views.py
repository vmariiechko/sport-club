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
        'Trainer List': '/trainers/',
        'Trainer': '/trainers/{id}/',
        'Login Staff': '/staff/login/',
        'Get All Users\' Subscription': '/staff/subscriptions/',
        'Change Subscription': '/staff/subscriptions/{id}/',
        'Get All Reservations': '/staff/reservations/',
        'Change Reservation': '/staff/reservations/{id}/',
        'Register User': '/users/register/',
        'Logout User': '/users/logout/',
        'Login User': '/users/login/',
        'Get new Access Token': '/users/login/refresh/',
        'Get User Data': '/users/me/',
        'Update User Data': '/users/me/',
        'Change User Password': '/users/me/password',
        'Get User Subscription': '/users/me/subscription',
        'Create User Subscription': '/users/me/subscription',
        'Get User Reservation List': '/users/me/reservations/',
        'Create User Reservation': '/users/me/reservations/',
        'Get User Reservation': '/users/me/reservations/{id}/',
        'Delete User Reservation': '/users/me/reservations/{id}/',
    }

    @swagger_auto_schema(responses={200: 'OK'})
    def get(self, request):

        docs = {'API Documentation': reverse('api:schema-swagger-ui', request=request)}
        return Response({**docs, **self.api_urls})
