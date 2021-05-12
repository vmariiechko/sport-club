from django.urls import path
from .views import PostList, PostDetail

app_name = 'blog_api'

urlpatterns = [
    path('posts/', PostList.as_view(), name='post_list'),
    path('posts/<str:pk>', PostDetail.as_view(), name='post_detail')
]
