import json
# REST FRAMEWORK
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# My Models
from banker.models import Banker
from owner.models import Owner
from bank.models import Bank
from actor.models import Actor
from .serializers import ActorSerializer


# Create your views here.
@api_view(['POST'])
def add(request):
	data = request.data
	try:
		bank_data = []
		if 'bank' in data:
			bank_data = data['bank']
			del data['bank']

		banker_data = []
		if 'banker' in data:
			banker_data = data['banker']
			del data['banker']

		owner_data = []
		if 'owner' in data:
			owner_data = data['owner']
			del data['owner']

		actor = Actor.objects.create(**data)
		if len(bank_data) > 0:
			for d in bank_data:
				bank_obj = Bank.objects.get(id=d['id'])
				actor.bank.add(bank_obj)

		if len(banker_data) > 0:
			for d in banker_data:
				banker_obj = Banker.objects.get(id=d['id'])
				actor.banker.add(banker_obj)

		if len(owner_data) > 0:
			for d in owner_data:
				owner_obj = Owner.objects.get(id=d['id'])
				actor.owner.add(owner_obj)

		message = {'success': True, 'message': "Actor added successfully"}
		return Response(message, status=status.HTTP_201_CREATED)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': "Actor not added successfully"}
		return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getAll(request):
	try:
		actor = Actor.objects.all().order_by('id')
		serializer = ActorSerializer(actor, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': 'Error Fetching Actors'}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['GET'])
def getOne(request, id):
	try:
		actor = Actor.objects.get(id=id)
		serializer = ActorSerializer(actor, many=False)
		return Response(serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': 'Error Fetching Actor'}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['Delete'])
def delete(request, id):
	try:
		actor = Actor.objects.get(id=id)
		actor.delete()
		message = {'success': True, 'message': "Actor deleted successfully"}
		return Response(message, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': e}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['PUT'])
def edit(request, id):
	data = request.data
	try:
		bank_data = []
		if 'bank' in data:
			bank_data = data['bank']
			del data['bank']

		banker_data = []
		if 'banker' in data:
			banker_data = data['banker']
			del data['banker']

		owner_data = []
		if 'owner' in data:
			owner_data = data['owner']
			del data['owner']

		actor = Actor.objects.get(id=id)

		for key, value in data.items():
			setattr(actor, key, value)

		actor.bank.clear()
		if len(bank_data) > 0:
			for d in bank_data:
				bank_obj = Bank.objects.get(id=d['id'])
				actor.bank.add(bank_obj)

		actor.banker.clear()
		if len(banker_data) > 0:
			for d in banker_data:
				banker_obj = Banker.objects.get(id=d['id'])
				actor.banker.add(banker_obj)

		actor.owner.clear()
		if len(owner_data) > 0:
			for d in owner_data:
				owner_obj = Owner.objects.get(id=d['id'])
				actor.owner.add(owner_obj)

		actor.save()

		message = {'success': True, 'message': "actor details updated successfully"}
		return Response(message, status=status.HTTP_200_OK)
	except Actor.DoesNotExist:
		message = {'success': False, 'error': "actor not found"}
		return Response(message, status=status.HTTP_404_NOT_FOUND)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': str(e)}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)
