from django.db import models

from ..subscription_api.models import Subscription
from ..accounts_api.models import Trainer


class Reservation(models.Model):
    """Model to represent client reservations."""

    REQUESTED = 1
    ACCEPTED = 2
    DENIED = 3
    STATUS = (
        (REQUESTED, "Requested"),
        (ACCEPTED, "Accepted"),
        (DENIED, "Denied"),
    )

    subscription = models.ForeignKey(Subscription, on_delete=models.CASCADE)
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)
    status = models.PositiveSmallIntegerField(choices=STATUS, default=REQUESTED)
    reserved_start = models.DateTimeField()
    reserved_end = models.DateTimeField()
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.subscription) + " -> " + str(self.trainer)
