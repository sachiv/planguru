from rest_framework import viewsets

from planguru.events.models import Event

from . import serializers


# ----------------------------------------------------------------------------------------------------------------------
# events
# ----------------------------------------------------------------------------------------------------------------------
class EventViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EventSerializer

    def get_queryset(self):
        user = self.request.user
        return Event.objects.all().filter(user=user)
