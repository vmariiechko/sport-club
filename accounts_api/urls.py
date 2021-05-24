from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import RegisterMember, ChangeMemberPassword, MemberDetailViewSet, BlacklistTokenView

app_name = 'accounts_api'

urlpatterns = [
    path('me/', MemberDetailViewSet.as_view({'get': 'retrieve', 'put': 'update'}), name='member_data'),
    path('me/password', ChangeMemberPassword.as_view(), name='change_member_password'),
    path('register/', RegisterMember.as_view(), name='register_member'),
    path('logout/', BlacklistTokenView.as_view(), name='logout_member'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
