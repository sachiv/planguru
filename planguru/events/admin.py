from django.contrib import admin

from import_export.admin import ImportExportModelAdmin

from .models import Event


@admin.register(Event)
class EventAdmin(ImportExportModelAdmin):
    model = Event
    list_display = ['user', 'start_datetime', 'end_datetime', 'created', 'modified']