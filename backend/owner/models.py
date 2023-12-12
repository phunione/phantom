from django.db import models

from banker.models import Banker


def file_path(_, filename):
	return f'files/owner/{filename}'


class Owner(models.Model):
	OWNER_TYPE_CHOICES = [
		('', 'Select Option'),
		('prop', 'Prop'),
		('only aadhar', 'Only Aadhar'),
		('dummy', 'Dummy'),
		('aadhar otp', 'Aadhar OTP'),
	]

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
	owner_type = models.CharField(max_length=100, choices=OWNER_TYPE_CHOICES, default='', null=False, blank=False)
	pdfs = models.FileField(upload_to=file_path)

	# actor = models.ManyToManyField(Actor, blank=True) ## Already added in Actor Model
	# company = models.ManyToManyField(Company, blank=True)  ## Already added in Company Model
	banker = models.ManyToManyField(Banker, blank=True)
