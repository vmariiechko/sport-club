from django.db import models
from django.utils import timezone

from ..accounts_api.models import Member
from ..cards_api.models import Pass


def month_hence():
    return timezone.now() + timezone.timedelta(days=30)


class Subscription(models.Model):
    """Model to represent client subscription."""

    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    card = models.ForeignKey(Pass, on_delete=models.CASCADE)
    visits_count = models.PositiveIntegerField(default=0)
    purchased = models.DateTimeField(default=timezone.now)
    expires = models.DateTimeField(default=month_hence)

    def __str__(self):
        return self.member.get_full_name() + ": " + self.card.name
