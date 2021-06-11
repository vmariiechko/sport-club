from django.urls import path
from .views import LoginStaffTokenObtainView, StaffReservationsViewSet

app_name = 'staff_api'

urlpatterns = [
    path('login/', LoginStaffTokenObtainView.as_view(), name='staff-token-obtain-pair'),
    path('reservations/', StaffReservationsViewSet.as_view({'get': 'list'}),
         name='staff-reservation-list'),
]
