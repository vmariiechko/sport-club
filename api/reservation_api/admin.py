from django.contrib import admin
from .models import Reservation


@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):

    readonly_fields = ('id', 'updated',)
    list_display = ('subscription', 'trainer', 'status', 'reserved_start', 'reserved_end')
    list_filter = ('status', 'trainer', 'subscription__member__email')
    fieldsets = (
        (None, {'fields': ('id', 'subscription', 'trainer', 'status')}),
        ('Appointment', {'fields': ('reserved_start', 'reserved_end', 'updated')}),
    )
    search_fields = ('subscription__member__email', 'subscription__member__first_name', 'trainer__first_name',
                     'subscription__member__last_name', 'trainer__last_name')
    ordering = ('-reserved_start',)
