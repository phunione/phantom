from rest_framework import serializers
from .models import Bank


class BankSerializer(serializers.ModelSerializer):
	banker = serializers.SerializerMethodField(read_only=True)

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

	class Meta:
		model = Bank
		fields = ('id', 'name', 'ifsc', 'ad_code', 'swift_code', 'banker')
