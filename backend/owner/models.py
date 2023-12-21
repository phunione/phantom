from django.db import models
from django.contrib.postgres.fields import ArrayField


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
	adhar_number = models.CharField(max_length=26, null=False, blank=False)
	pan_number = models.CharField(max_length=20, null=False, blank=False)
	din_number = models.CharField(max_length=20, null=True, blank=True)
	otp_phoneNr = models.CharField(max_length=20, null=True, blank=True)
	sim_number = models.CharField(max_length=10, null=True, blank=True)
	email = models.EmailField()
	per_phone = models.CharField(max_length=20, null=True, blank=True)
	mother_name = models.CharField(max_length=200, null=True, blank=True)
	address = models.TextField(null=True, blank=True)
	type = models.CharField(max_length=100, choices=OWNER_TYPE_CHOICES, default='', null=False, blank=False)
	pdfs = ArrayField(models.FileField(upload_to=file_path, null=True, blank=True), default=list)

	# actor = models.ManyToManyField(Actor, blank=True) ## Already added in Actor Model
	# company = models.ManyToManyField(Company, blank=True)  ## Already added in Company Model
	# banker = models.ManyToManyField(Banker, blank=True) ## Already added in Banker Model

	def __str__(self):
		return self.name
