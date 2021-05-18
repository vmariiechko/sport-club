from django.urls import path
from .views import RegisterMember

app_name = 'accounts_api'

urlpatterns = [
    path('register/', RegisterMember.as_view(), name='register_member'),
]
