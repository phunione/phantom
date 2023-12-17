from rest_framework import serializers

from .models import ExcelCompany


class ExcelDataSerializer(serializers.ModelSerializer):
	class Meta:
		model = ExcelCompany
		fields = "__all__"
