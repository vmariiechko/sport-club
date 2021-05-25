from django.urls import path
from .views import PassListView, PassDetailView

app_name = 'cards_api'

urlpatterns = [
    path('', PassListView.as_view(), name='pass_list'),
    path('<str:pk>/', PassDetailView.as_view(), name='pass_detail')
]
