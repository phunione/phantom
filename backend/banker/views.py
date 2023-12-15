from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Banker
from actor.models import Actor
from bank.models import Bank
from company.models import Company
from .serializers import BankerSerializer


@api_view(['POST'])
def add(req):
	data = req.data
	try:
		actor_data = []
		if 'actor' in data:
			actor_data = data['actor']
			del data['actor']

		bank_data = []
		if 'bank' in data:
			bank_data = data['bank']
			del data['bank']

		banker = Banker.objects.create(**data)

		if len(actor_data) > 0:
			for d in actor_data:
				actor_obj = Actor.objects.get(id=d['id'])
				banker.actor_set.add(actor_obj)

		if len(bank_data) > 0:
			for d in bank_data:
				bank_obj = Bank.objects.get(id=d['id'])
				banker.bank_set.add(bank_obj)

		banker.save()

		message = {'success': True, 'message': "Banker added successfully"}
		return Response(message, status=status.HTTP_201_CREATED)
	except Exception as e:
		print(e)
		return Response({'success': False, 'error': e}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getAll(req):
	try:
		banker = Banker.objects.all()
		banker_serializer = BankerSerializer(banker, many=True)
		return Response(banker_serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {
			'success': False,
			'error': 'Error Fetching Bankers'
		}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['GET'])
def getOne(request, id):
	try:
		banker = Banker.objects.get(id=id)
		serializer = BankerSerializer(banker, many=False)
		return Response(serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': e}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['Delete'])
def delete(request, id):
	try:
		banker = Banker.objects.get(id=id)
		banker.delete()
		message = {'success': True, 'message': "Banker deleted successfully"}
		return Response(message, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': e}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)
