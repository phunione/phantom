from django.db import models

# Create your models here.
class ExcelCompany(models.Model):
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
	type = models.CharField(max_length=150, choices=COMPANY_TYPE_CHOICES, default='', null=False, blank=False)
	OwnerPan = models.AarryField(models.CharField(max_length=150, choices=COMPANY_TYPE_CHOICES, default='', null=False, blank=False))
	OwnerName = models.AarryField(models.CharField(max_length=150, choices=COMPANY_TYPE_CHOICES, default='', null=False, blank=False))
    def __str__(self):
		return self.name

