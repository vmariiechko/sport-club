from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin
from .models import Member


class MemberAdmin(UserAdmin):

    list_display = ('email', 'first_name', 'last_name', 'phone', 'is_active', 'is_staff')
    list_filter = ('email', 'first_name', 'last_name', 'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'first_name', 'last_name', 'phone')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Other', {'fields': ('registration_date', 'password')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'phone', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )
    search_fields = ('email', 'first_name', 'last_name', 'phone')
    ordering = ('-registration_date',)


admin.site.register(Member, MemberAdmin)
admin.site.unregister(Group)
admin.site.site_header = 'BEST GYM ON MARS'
