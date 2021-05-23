from django.urls import path
from .views import RegisterMember, BlacklistTokenView, MemberDetailViewSet

app_name = 'accounts_api'

urlpatterns = [
    path('me/', MemberDetailViewSet.as_view({'get': 'retrieve'}), name='member_data'),
    path('register/', RegisterMember.as_view(), name='register_member'),
    path('logout/', BlacklistTokenView.as_view(), name='logout_member'),
]
