from django.utils import timezone
from django.contrib.auth import get_user_model

from rest_framework import viewsets, generics

from planguru.events.models import Event

from . import serializers


# ----------------------------------------------------------------------------------------------------------------------
# users
# ----------------------------------------------------------------------------------------------------------------------
class UserList(generics.ListAPIView):
    serializer_class = serializers.UserSerializer

    def get_queryset(self):
        """
        :return: Return list
        """
        return get_user_model().objects.all()


class UserDetail(generics.ListAPIView):
    serializer_class = serializers.UserSerializer

    def get_queryset(self):
        """
        :return: Return list
        """
        user = self.request.user
        return get_user_model().objects.filter(pk=user.pk)


# ----------------------------------------------------------------------------------------------------------------------
# events
# ----------------------------------------------------------------------------------------------------------------------
class EventViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.EventSerializer

    def get_queryset(self):
        user = self.request.user
        return Event.objects.filter(user=user, date__gte=timezone.now().date()).order_by('date', 'time')

    def perform_create(self, serializer):
        serializer.save(booked_by=self.request.user)


class UserEventList(generics.ListAPIView):
    serializer_class = serializers.EventSerializer

    def get_queryset(self):
        """
        :return: Return list
        """
        user_pk = self.kwargs.get('user_pk')
        date = self.kwargs.get('date')
        if user_pk and date:
            return Event.objects.filter(user__pk=user_pk, date=date).order_by('time')
        elif user_pk:
            return Event.objects.filter(user__pk=user_pk, date__gte=timezone.now().date()).order_by('date', 'time')
