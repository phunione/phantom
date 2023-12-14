from rest_framework import serializers
from .models import Owner


class OwnerSerializer(serializers.ModelSerializer):
	class Meta:
		model = Owner
		fields = (
		'id', 'name', 'adhar_number', 'pan_number', 'din_number', 'otp_phoneNr', 'sim_number', 'email', 'per_phone',
		'mother_name', 'address', 'owner_type',)
