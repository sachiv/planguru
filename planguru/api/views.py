from django.utils import timezone
from django.contrib.auth import get_user_model
from django.db.models import Q

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


class UserDetail(generics.RetrieveUpdateAPIView):
    serializer_class = serializers.UserSerializer

    def get_queryset(self):
        """
        :return: Return list
        """
        return get_user_model().objects.all()


class AuthenticatedUserDetail(generics.ListAPIView):
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
class EventList(generics.ListCreateAPIView):
    serializer_class = serializers.EventSerializer

    def get_queryset(self):
        """
        :return: Return list
        """
        user_pk = self.kwargs.get('user_pk')
        date = self.kwargs.get('date')
        if user_pk and date:
            return Event.objects.filter(user__pk=user_pk, date=date).order_by('time')
        else:
            user = self.request.user
            return Event.objects.filter(Q(user=user) | Q(booked_by=user)).order_by('date', 'time')

    def perform_create(self, serializer):
        user_pk = self.kwargs.get('user_pk')
        user = get_user_model().objects.get(pk=user_pk)
        serializer.save(user=user, booked_by=self.request.user)


class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.EventSerializer

    def get_queryset(self):
        user = self.request.user
        return Event.objects.filter(Q(user=user) | Q(booked_by=user))
