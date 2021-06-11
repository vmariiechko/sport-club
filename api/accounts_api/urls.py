from django.urls import path
from ..subscription_api.views import SubscriptionViewSet
from ..reservation_api.views import ReservationViewSet
from .views import (RegisterMemberView, ChangeMemberPasswordView, MemberDetailViewSet,
                    LoginMemberTokenObtainView, LoginMemberTokenRefreshView, LogoutMemberView)

app_name = 'accounts_api'

urlpatterns = [
    path('me/', MemberDetailViewSet.as_view({'get': 'retrieve', 'put': 'update'}), name='member-data'),
    path('me/password', ChangeMemberPasswordView.as_view(), name='change-member-password'),
    path('me/subscription/', SubscriptionViewSet.as_view({'get': 'retrieve', 'post': 'create'}), name='subscription'),
    path('me/reservations/', ReservationViewSet.as_view({'get': 'list', 'post': 'create'}),
         name='member-reservation-list'),
    path('me/reservations/<int:pk>/', ReservationViewSet.as_view(
        {'get': 'retrieve', 'delete': 'destroy'}), name='reservation-detail'),
    path('register/', RegisterMemberView.as_view(), name='register-member'),
    path('logout/', LogoutMemberView.as_view(), name='logout-member'),
    path('login/', LoginMemberTokenObtainView.as_view(), name='member-token-obtain-pair'),
    path('login/refresh/', LoginMemberTokenRefreshView.as_view(), name='token-refresh'),
]
