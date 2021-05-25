from rest_framework import generics
from .models import Post
from .serializers import PostSerializer


class PostListView(generics.ListAPIView):
    """
    Return a list of all the published posts.
    """

    queryset = Post.postobjects.all()
    serializer_class = PostSerializer


class PostDetailView(generics.RetrieveAPIView):
    """
    Return the given post.
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer
