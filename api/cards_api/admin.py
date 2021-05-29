from django.contrib import admin
from .models import Pass


@admin.register(Pass)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'price_per_month', 'with_trainer')
    prepopulated_fields = {'slug': ('name',)}
