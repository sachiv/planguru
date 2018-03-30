from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _

from model_utils.models import TimeStampedModel


class Event(TimeStampedModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    start_datetime = models.DateTimeField(_("Start Date & Time"), blank=True, null=True, default=None)
    end_datetime = models.DateTimeField(_("End Date & Time"), blank=True, null=True, default=None)

    def __str__(self):
        return str(self.pk)