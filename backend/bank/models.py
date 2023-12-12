from django.db import models

from banker.models import Banker


# Create your models here.
class Bank(models.Model):
	name = models.CharField(max_length=200, null=False, blank=False)
	ifsc = models.CharField(max_length=100, null=False, blank=False)
	ad_code = models.CharField(max_length=100, null=False, blank=False)
	swift_code = models.CharField(max_length=100, null=False, blank=False)

	banker = models.ManyToManyField(Banker, blank=True)
