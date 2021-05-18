from django.urls import path
from .views import RegisterMember, BlacklistTokenView

app_name = 'accounts_api'

urlpatterns = [
    path('register/', RegisterMember.as_view(), name='register_member'),
    path('logout/', BlacklistTokenView.as_view(), name='logout_member'),
]
