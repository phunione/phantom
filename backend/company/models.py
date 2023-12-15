from django.db import models

from actor.models import Actor
from bank.models import Bank
from banker.models import Banker
from owner.models import Owner


def file_path(_, filename):
	return f'files/company/{filename}'


# Create your models here.
class Company(models.Model):
	COMPANY_STATUS_CHOICES = [
		("", "Select Company Status"),
		("applied", "Applied"),
		("aproved", "Aproved"),
		("querry", "Querry"),
		("querryFilled", "Querry Filled"),
		("rejected", "Rejected")
	]
	STATE_CHOICES = [
		('', 'Select State'),
		('Andhra Pradesh', 'Andhra Pradesh'),
		('Arunachal Pradesh', 'Arunachal Pradesh'),
		('Assam', 'Assam'),
		('Bihar', 'Bihar'),
		('Chhattisgarh', 'Chhattisgarh'),
		('Goa', 'Goa'),
		('Gujarat', 'Gujarat'),
		('Haryana', 'Haryana'),
		('Himachal Pradesh', 'Himachal Pradesh'),
		('Jharkhand', 'Jharkhand'),
		('Karnataka', 'Karnataka'),
		('Kerala', 'Kerala'),
		('Madhya Pradesh', 'Madhya Pradesh'),
		('Maharashtra', 'Maharashtra'),
		('Manipur', 'Manipur'),
		('Meghalaya', 'Meghalaya'),
		('Mizoram', 'Mizoram'),
		('Nagaland', 'Nagaland'),
		('Odisha', 'Odisha'),
		('Punjab', 'Punjab'),
		('Rajasthan', 'Rajasthan'),
		('Sikkim', 'Sikkim'),
		('Tamil Nadu', 'Tamil Nadu'),
		('Telangana', 'Telangana'),
		('Tripura', 'Tripura'),
		('Uttar Pradesh', 'Uttar Pradesh'),
		('Uttarakhand', 'Uttarakhand'),
		('West Bengal', 'West Bengal'),
	]
	COMPANY_TYPE_CHOICES = [
		('', 'Select Company Type'),
		('A', 'Type A'),
		('B', 'Type B')
	]

	name = models.CharField(max_length=200, null=False, blank=False)
	pan_number = models.CharField(max_length=10, null=False, blank=False)
	pan_dob = models.DateField(null=False, blank=False)
	querry_filled = models.DateField(auto_now_add=True)

	company_status = models.CharField(max_length=100, choices=COMPANY_STATUS_CHOICES, default='', null=True, blank=True)
	address = models.TextField(null=True, blank=True)
	isMaharashtra = models.BooleanField(default=False, null=True, blank=True)
	state = models.CharField(max_length=150, choices=STATE_CHOICES, default='', null=False, blank=False)

	pdfs = models.FileField(upload_to=file_path, null=True, blank=True)
	type = models.CharField(max_length=150, choices=COMPANY_TYPE_CHOICES, default='', null=False, blank=False)

	actor = models.ManyToManyField(Actor, blank=True)
	owner = models.ManyToManyField(Owner, blank=True)
	bank = models.ForeignKey(Bank, on_delete=models.SET_NULL, blank=True, null=True)
	banker = models.ForeignKey(Banker, on_delete=models.SET_NULL, blank=True, null=True)

	def __str__(self):
		return self.name
