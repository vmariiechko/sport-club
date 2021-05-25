from django.urls import path
from .views import (RegisterMemberView, ChangeMemberPasswordView, MemberDetailViewSet,
                    LoginMemberTokenObtainView, LoginMemberTokenRefreshView, LogoutMemberView)

app_name = 'accounts_api'

urlpatterns = [
    path('me/', MemberDetailViewSet.as_view({'get': 'retrieve', 'put': 'update'}), name='member_data'),
    path('me/password', ChangeMemberPasswordView.as_view(), name='change_member_password'),
    path('register/', RegisterMemberView.as_view(), name='register_member'),
    path('logout/', LogoutMemberView.as_view(), name='logout_member'),
    path('login/', LoginMemberTokenObtainView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', LoginMemberTokenRefreshView.as_view(), name='token_refresh'),
]
