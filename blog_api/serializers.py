from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'category', 'title', 'image',  'content', 'published')
