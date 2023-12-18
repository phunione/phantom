import json
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializers import CompanySerializer
from .models import Company
from actor.models import Actor
from bank.models import Bank
from banker.models import Banker
from owner.models import Owner


@api_view(['POST'])
def add(req):
	data = req.data
	print(data)
	try:
		company = Company.objects.create(name=data['name'], pan_number=data['pan_number'], pan_dob=data['pan_dob'],
		                                 querry_filled=data['querry_filled'], company_status=data['company_status'],
		                                 type=data['type'], address=data['address'], state=data['state'])

		if data['isMaharashtra'] == 'true':
			company.isMaharashtra = True
		else:
			company.isMaharashtra = False

		if data['pdfs'] != '':
			company.pdfs = data['pdfs']

		if data['actor'] != '':
			parsed_data = json.loads(data['actor'])
			for d in parsed_data:
				actor_obj = Actor.objects.get(id=d['id'])
				company.actor.add(actor_obj)

		if data['bank'] != '':
			parsed_data = json.loads(data['bank'])
			bank_obj = Bank.objects.get(id=int(parsed_data))
			company.bank = bank_obj

		if data['banker'] != '':
			parsed_data = json.loads(data['banker'])
			banker_obj = Banker.objects.get(id=int(parsed_data))
			company.banker = banker_obj

		if data['owner'] != '':
			parsed_data = json.loads(data['owner'])
			for d in parsed_data:
				owner_obj = Owner.objects.get(id=d['id'])
				company.owner.add(owner_obj)

		company.save()

		message = {'success': True, 'message': "Company added successfully"}
		return Response(message, status=status.HTTP_201_CREATED)
	except Exception as e:
		print('add error', e)
		message = {'success': False, 'error': 'Error Adding Company'}
		return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getAll(req):
	try:
		company = Company.objects.all().order_by('id')
		company_serializer = CompanySerializer(company, many=True)
		return Response(company_serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': 'Error Fetching Companies'}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['GET'])
def getOne(request, id):
	try:
		company = Company.objects.get(id=id)
		serializer = CompanySerializer(company, many=False)
		return Response(serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': e}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['Delete'])
def delete(request, id):
	try:
		banker = Company.objects.get(id=id)
		banker.delete()
		message = {'success': True, 'message': "Comapny deleted successfully"}
		return Response(message, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': e}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['PUT'])
def edit(req, id):
	req_data = req.data
	data = req_data.copy()
	try:
		pdfs = ''
		if 'pdfs' in data:
			pdfs = data['pdfs']
			del data['pdfs']

		parsed_actor_data = []
		if 'actor' in data:
			parsed_actor_data = json.loads(data['actor'])
			del data['actor']

		parsed_bank_data = ''
		if 'bank' in data:
			parsed_bank_data = json.loads(data['bank'])
			if type(parsed_bank_data) == list:
				print("in bank")
				parsed_bank_data = str(parsed_bank_data[0]['id'])
			del data['bank']

		parsed_banker_data = ''
		if 'banker' in data:
			parsed_banker_data = json.loads(data['banker'])
			if type(parsed_banker_data) == list:
				print("in banker")
				parsed_banker_data = str(parsed_banker_data[0]['id'])
			del data['banker']

		parsed_owner_data = []
		if 'owner' in data:
			parsed_owner_data = json.loads(data['owner'])
			del data['owner']

		company = Company.objects.get(id=id)

		for key, value in data.items():
			setattr(company, key, value)

		if 'isMaharashtra' in data:
			if data['isMaharashtra'] == 'true':
				company.isMaharashtra = True
			else:
				company.isMaharashtra = False

		if pdfs != '':
			company.pdfs = data['pdfs']

		company.actor.clear()
		if len(parsed_actor_data) > 0:
			for d in parsed_actor_data:
				actor_obj = Actor.objects.get(id=d['id'])
				company.actor.add(actor_obj)

		if parsed_bank_data:
			bank_obj = Bank.objects.get(id=int(parsed_bank_data))
			company.bank = bank_obj
		else:
			company.bank = None

		if parsed_banker_data and parsed_banker_data.isnumeric():
			banker = Banker.objects.get(id=int(parsed_banker_data))
			company.banker = banker
		else:
			company.banker = None

		company.owner.clear()
		if len(parsed_owner_data) > 0:
			for d in parsed_owner_data:
				owner_obj = Owner.objects.get(id=d['id'])
				company.owner.add(owner_obj)

		company.save()

		message = {'success': True, 'message': "Banker edited successfully"}
		return Response(message, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': "Error Updating Bank"}
		return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def editRelation(req, id):
	req_data = req.data
	data = req_data.copy()
	try:
		parsed_actor_data = []
		if 'actor' in data:
			parsed_actor_data = int(data['actor'])
			parsed_actor_data = Actor.objects.get(id=parsed_actor_data)
			del data['actor']

		parsed_owner_data = []
		if 'owner' in data:
			parsed_owner_data = int(data['owner'])
			parsed_owner_data = Owner.objects.get(id=parsed_owner_data)
			del data['owner']

		company = Company.objects.get(id=id)

		company.actor.add(parsed_actor_data)
		company.owner.add(parsed_owner_data)

		company.save()

		message = {'success': True, 'message': "Banker edited successfully"}
		return Response(message, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': "Error Updating Bank"}
		return Response(message, status=status.HTTP_400_BAD_REQUEST)
