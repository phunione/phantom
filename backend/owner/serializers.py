from rest_framework import serializers

from banker.serializers import BankerSerializer
from company.serializers import CompanySerializer
from .models import Owner


class OwnerSerializer(serializers.ModelSerializer):
	actor = serializers.SerializerMethodField(read_only=True)
	banker = serializers.SerializerMethodField(read_only=True)
	company = serializers.SerializerMethodField(read_only=True)

	@staticmethod
	def get_actor(obj):
		actor_obj = obj.actor_set.all()
		data = []
		for actor in actor_obj:
			data.append({'id': actor.id, 'name': actor.name})
		return data

	@staticmethod
	def get_banker(obj):
		banker_obj = obj.banker_set.all()
		serializer = BankerSerializer(banker_obj, many=True)
		return serializer.data

	@staticmethod
	def get_company(obj):
		company_obj = obj.company_set.all()
		serializer = CompanySerializer(company_obj, many=True)
		return serializer.data

	class Meta:
		model = Owner
		fields = (
			'id', 'name', 'adhar_number', 'pan_number', 'din_number', 'otp_phoneNr', 'sim_number', 'email', 'per_phone',
			'mother_name', 'address', 'type', 'pdfs', 'actor', 'banker', 'company')
