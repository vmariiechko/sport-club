from django.urls import path
from .views import LoginStaffTokenObtainView

app_name = 'staff_api'

urlpatterns = [
    path('login/', LoginStaffTokenObtainView.as_view(), name='staff-token-obtain-pair'),
]
