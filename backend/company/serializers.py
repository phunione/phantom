from rest_framework import serializers

from .models import Company


class CompanySerializer(serializers.ModelSerializer):
	actor = serializers.SerializerMethodField(read_only=True)
	bank = serializers.SerializerMethodField(read_only=True)
	banker = serializers.SerializerMethodField(read_only=True)
	owner = serializers.SerializerMethodField(read_only=True)
	pdfs = serializers.SerializerMethodField(read_only=True)

	@staticmethod
	def get_actor(obj):
		try:
			actor_obj = obj.actor.all()
			data = []
			for actor in actor_obj:
				data.append({'id': actor.id, 'name': actor.name})
			return data
		except Exception as e:
			print(e)

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
			banker = obj.banker
			data = [{'id': banker.id, 'name': banker.name}]
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

	@staticmethod
	def get_pdfs(obj):
		pdfs = obj.pdfs.all()
		data = []
		for pdf in pdfs:
			data.append({'pdf_url': pdf.pdf.url})
		return data

	class Meta:
		model = Company
		fields = (
			'id', 'name', 'pan_number', 'pan_dob', 'company_status', 'isMaharashtra', 'state',
			'type', 'querry_filled', 'actor', 'bank', 'banker', 'owner', 'pdfs')
