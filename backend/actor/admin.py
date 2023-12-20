from django.contrib import admin

from .models import Actor


# Register your models here.
@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):
	list_display = [
		'name', 'adhar_number', 'pan_number', 'din_number', 'sim_number', 'email', 'otp_phoneNr'
	]
