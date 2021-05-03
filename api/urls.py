from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.APIOverview.as_view(), name="api-overview"),
    path('test-view/', views.TestView.as_view(), name="test-view"),
]
