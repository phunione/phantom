from rest_framework import serializers

from .models import Company


class CompanySerializer(serializers.ModelSerializer):
	class Meta:
		model = Company
		fields = (
			'id', 'name', 'pan_number', 'pan_dob', 'company_status', 'isMaharashtra', 'state',
			'company_type', 'querry_filled',)
