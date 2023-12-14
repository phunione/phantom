from rest_framework import serializers
from .models import Banker


class BankerSerializer(serializers.ModelSerializer):
	class Meta:
		model = Banker
		fields = ('id', 'name', 'rtds', 'rt', 'forex', 'demand',)
