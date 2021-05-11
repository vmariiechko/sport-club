from django.urls import path
from .views import PassList, PassDetail

app_name = 'cards_api'

urlpatterns = [
    path('passes/', PassList.as_view(), name='pass_list'),
    path('passes/<str:pk>', PassDetail.as_view(), name='pass_detail')
]
