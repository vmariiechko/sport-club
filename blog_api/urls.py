from django.urls import path
from .views import PostList

app_name = 'posts'

urlpatterns = [
    path('posts/', PostList.as_view(), name="posts_list"),
]
