from rest_framework import serializers
from .models import Bank


class BankSerializer(serializers.ModelSerializer):
	class Meta:
		model = Bank
		fields = ('id', 'name', 'ifsc', 'ad_code', 'swift_code',)
