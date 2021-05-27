from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin
from .models import Member, Trainer


class MemberAdmin(UserAdmin):

    list_display = ('email', 'id',  'first_name', 'last_name', 'phone', 'is_active', 'is_staff')
    list_filter = ('email', 'first_name', 'last_name', 'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('email', 'first_name', 'last_name', 'phone', 'avatar')}),
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


class TrainerAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'rank')
    search_fields = ('first_name', 'last_name')


admin.site.register(Member, MemberAdmin)
admin.site.register(Trainer, TrainerAdmin)
admin.site.unregister(Group)
admin.site.site_header = 'BEST GYM ON MARS'
