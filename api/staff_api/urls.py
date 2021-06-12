from django.urls import path
from .views import LoginStaffTokenObtainView, StaffReservationViewSet, StaffSubscriptionViewSet

app_name = 'staff_api'

urlpatterns = [
    path('login/', LoginStaffTokenObtainView.as_view(), name='staff-token-obtain-pair'),
    path('reservations/', StaffReservationViewSet.as_view({'get': 'list'}), name='staff-reservation-list'),
    path('reservations/<int:pk>/', StaffReservationViewSet.as_view({'put': 'update'}),
         name='staff-reservation-detail'),
    path('subscriptions/', StaffSubscriptionViewSet.as_view({'get': 'list'}), name='staff-subscription-list'),
    path('subscriptions/<int:pk>/', StaffSubscriptionViewSet.as_view({'put': 'update'}),
         name='staff-subscription-detail'),
]
