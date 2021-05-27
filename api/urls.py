from django.urls import path, include
from .accounts_api.views import TrainerListView, TrainerDetailView
from . import views

app_name = 'api'

urlpatterns = [
    path('', views.APIOverview.as_view(), name="api-overview"),
    path('trainers/', TrainerListView.as_view(), name='trainer-list'),
    path('trainers/<str:pk>/', TrainerDetailView.as_view(), name='trainer-detail'),
]
