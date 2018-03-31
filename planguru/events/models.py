from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _

from model_utils.models import TimeStampedModel


class Event(TimeStampedModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, models.CASCADE)
    date = models.DateField(_("Date"), blank=True, null=True, default=None)
    time = models.TimeField(_("Time"), blank=True, null=True, default=None)
    booked_by = models.ForeignKey(settings.AUTH_USER_MODEL, models.SET_NULL, blank=True, null=True,
                                  related_name='booked_by')

    def __str__(self):
        return str(self.pk)
