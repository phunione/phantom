from rest_framework import serializers

from actor.models import Actor


class ActorSerializer(serializers.ModelSerializer):
	bank = serializers.SerializerMethodField(read_only=True)
	banker = serializers.SerializerMethodField(read_only=True)
	owner = serializers.SerializerMethodField(read_only=True)

	@staticmethod
	def get_bank(obj):
		try:
			bank_obj = obj.bank.all()
			data = []
			for bank in bank_obj:
				data.append({'id': bank.id, 'name': bank.name})
			return data
		except Exception as e:
			print(e)

	@staticmethod
	def get_banker(obj):
		try:
			banker_obj = obj.banker.all()
			data = []
			for banker in banker_obj:
				data.append({'id': banker.id, 'name': banker.name})
			return data
		except Exception as e:
			print(e)

	@staticmethod
	def get_owner(obj):
		try:
			owner_obj = obj.owner.all()
			data = []
			for owner in owner_obj:
				data.append({'id': owner.id, 'name': owner.name})
			return data
		except Exception as e:
			print(e)

	class Meta:
		model = Actor
		fields = (
			'id', 'name', 'adhar_number', 'pan_number', 'din_number', 'otp_phoneNr', 'sim_number', 'email', 'per_phone',
			'mother_name', 'address', 'bank', 'banker', 'owner')
