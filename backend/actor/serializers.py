from actor.models import Actor
from rest_framework import serializers


class ActorSerializer(serializers.ModelSerializer):
	class Meta:
		model = Actor
		fields = (
		'id', 'name', 'adhar_number', 'pan_number', 'din_number', 'otp_phoneNr', 'sim_number', 'email', 'per_phone',
		'mother_name', 'address',)
