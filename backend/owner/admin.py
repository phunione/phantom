from django.contrib import admin

from .models import Owner


# Register your models here.
@admin.register(Owner)
class OwnerAdmin(admin.ModelAdmin):
	list_display = (
		'name', 'owner_type', 'email', 'adhar_number', 'pan_number', 'din_number', 'sim_number', 'per_phone', 'otp_phoneNr'
	)
