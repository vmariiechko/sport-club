from django.urls import path
from .views import PostListView, PostDetailView

app_name = 'blog_api'

urlpatterns = [
    path('', PostListView.as_view(), name='post-list'),
    path('<str:pk>/', PostDetailView.as_view(), name='post-detail')
]
