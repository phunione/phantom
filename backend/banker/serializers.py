from rest_framework import serializers

from .models import Banker
from bank.serializers import BankSerializer


class BankerSerializer(serializers.ModelSerializer):
	actor = serializers.SerializerMethodField(read_only=True)
	bank = serializers.SerializerMethodField(read_only=True)

	@staticmethod
	def get_actor(obj):
		actor_obj = obj.actor_set.all()
		data = []
		for actor in actor_obj:
			data.append({'id': actor.id, 'name': actor.name})
		return data

	@staticmethod
	def get_bank(obj):
		bank = obj.bank_set.all()
		serializer = BankSerializer(bank, many=True)
		return serializer.data

	class Meta:
		model = Banker
		fields = ('id', 'name', 'rtds', 'rt', 'forex', 'demand', 'actor', 'bank')
