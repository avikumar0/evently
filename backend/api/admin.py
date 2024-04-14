from django.contrib import admin
from .models import User, Profile, Event

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']

class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['user', 'full_name' ,'verified']

class EventAdmin(admin.ModelAdmin):
    list_display = ['event_name', 'date', 'time', 'location', 'is_liked', 'user']
    list_filter = ['date', 'is_liked']
    search_fields = ['event_name', 'location']

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Event, EventAdmin)
