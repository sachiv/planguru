from django.contrib.auth import get_user_model

from rest_framework import serializers

from planguru.events.models import Event


# ----------------------------------------------------------------------------------------------------------------------
# users
# ----------------------------------------------------------------------------------------------------------------------
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'name', 'username', 'email')


# ----------------------------------------------------------------------------------------------------------------------
# events
# ----------------------------------------------------------------------------------------------------------------------
class EventSerializer(serializers.ModelSerializer):
    booked_by = UserSerializer()

    class Meta:
        model = Event
        fields = ('id', 'start_datetime', 'end_datetime', 'booked_by', 'created', 'modified')
