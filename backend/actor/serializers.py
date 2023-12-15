from rest_framework import serializers

from actor.models import Actor
from bank.serializers import BankSerializer
from banker.serializers import BankerSerializer
from owner.serializers import OwnerSerializer


class ActorSerializer(serializers.ModelSerializer):
	bank = serializers.SerializerMethodField(read_only=True)
	banker = serializers.SerializerMethodField(read_only=True)
	owner = serializers.SerializerMethodField(read_only=True)

	@staticmethod
	def get_bank(obj):
		try:
			bank_obj = obj.bank.all()
			serializer = BankSerializer(bank_obj, many=True)
			return serializer.data
		except Exception as e:
			print(e)

	@staticmethod
	def get_banker(obj):
		try:
			banker_obj = obj.banker.all()
			serializer = BankerSerializer(banker_obj, many=True)
			return serializer.data
		except Exception as e:
			print(e)

	@staticmethod
	def get_owner(obj):
		try:
			owner_obj = obj.owner.all()
			serializer = OwnerSerializer(owner_obj, many=True)
			return serializer.data
		except Exception as e:
			print(e)

	class Meta:
		model = Actor
		fields = (
			'id', 'name', 'adhar_number', 'pan_number', 'din_number', 'otp_phoneNr', 'sim_number', 'email', 'per_phone',
			'mother_name', 'address', 'bank', 'banker', 'owner')
