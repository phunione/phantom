from django.db import models

from owner.models import Owner


# Create your models here.
class Banker(models.Model):
	DEMAND_CHOICES = [
		('', 'Select Demand'),
		('one', 'One'), ('both', 'Both'), ('none', 'None')
	]

	name = models.CharField(max_length=200, null=False, blank=False)
	rtds = models.BooleanField(default=False, null=False, blank=False)
	rt = models.BooleanField(default=False, null=False, blank=False)
	forex = models.BooleanField(default=False, null=False, blank=False)
	demand = models.CharField(max_length=100, choices=DEMAND_CHOICES, default='', null=False, blank=False)

	owner = models.ManyToManyField(Owner, blank=True)

	def __str__(self):
		return self.name
