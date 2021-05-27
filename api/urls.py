from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from .accounts_api.views import TrainerListView, TrainerDetailView
from . import views

app_name = 'api'

schema_view = get_schema_view(
    openapi.Info(
        title="Fitness Club API",
        default_version='v1',
        description="The API for fitness club",
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('', views.APIOverview.as_view(), name="api-overview"),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('posts/', include('api.blog_api.urls')),
    path('passes/', include('api.cards_api.urls')),
    path('users/', include('api.accounts_api.urls')),
    path('trainers/', TrainerListView.as_view(), name='trainer-list'),
    path('trainers/<str:pk>/', TrainerDetailView.as_view(), name='trainer-detail'),
]
