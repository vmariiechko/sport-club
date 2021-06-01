from django.contrib import admin
from .models import Subscription


@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):

    readonly_fields = ('id',)
    list_display = ('member', 'card', 'visits_count', 'purchased', 'expires')
    list_filter = ('member__email', 'card__name')
    fieldsets = (
        (None, {'fields': ('id', 'member', 'card', 'visits_count')}),
        ('Time', {'fields': ('purchased', 'expires')}),
    )
    search_fields = ('member__email', 'card__name', 'visits_count')
    ordering = ('-purchased',)
