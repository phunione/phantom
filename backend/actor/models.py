from django.db import models

from bank.models import Bank
from banker.models import Banker
from owner.models import Owner


# Create your models here.
class Actor(models.Model):
	name = models.CharField(max_length=200, null=False, blank=False)
	adhar_number = models.CharField(max_length=14, null=False, blank=False)
	pan_number = models.CharField(max_length=10, null=False, blank=False)
	din_number = models.CharField(max_length=20, null=True, blank=True)
	otp_phoneNr = models.CharField(max_length=20, null=True, blank=True)
	sim_number = models.CharField(max_length=10, null=True, blank=True)
	email = models.EmailField()
	per_phone = models.CharField(max_length=20, null=True, blank=True)
	mother_name = models.CharField(max_length=200, null=True, blank=True)
	address = models.TextField(null=True, blank=True)

	bank = models.ManyToManyField(Bank, blank=True)
	banker = models.ManyToManyField(Banker, blank=True)
	owner = models.ManyToManyField(Owner, blank=True)
