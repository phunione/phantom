import json
from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser

from .serializers import CompanySerializer
from .models import Company, PDF_File
from actor.models import Actor
from bank.models import Bank
from banker.models import Banker
from owner.models import Owner


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def add(req):
	data = req.data
	print(data)
	try:
		company = Company.objects.create(name=data['name'], pan_number=data['pan_number'], pan_dob=data['pan_dob'],
		                                 querry_filled=data['querry_filled'], company_status=data['company_status'],
		                                 type=data['type'], address=data['address'], state=data['state'])

		if (data['state'] == 'Maharashtra'):
			data['isMaharashtra'] = 'true'

		if data['isMaharashtra'] == 'true':
			company.isMaharashtra = True
		else:
			company.isMaharashtra = False

		if 'pdfs' in data:
			for pdf in data.getlist('pdfs'):
				pdf_file = PDF_File.objects.create(pdf=pdf, company=company)
				pdf_file.save()
				print(company.pdfs)

		if data['actor'] != '':
			parsed_data = json.loads(data['actor'])
			for d in parsed_data:
				actor_obj = Actor.objects.get(id=d['id'])
				company.actor.add(actor_obj)

		if data['bank'] != '':
			parsed_data = json.loads(data['bank'])
			for d in parsed_data:
				bank_obj = Bank.objects.get(id=d['id'])
				company.bank.add(bank_obj)

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
@parser_classes([MultiPartParser, FormParser])
def edit(req, id):
	req_data = req.data
	data = req_data.copy()
	try:
		pdfs = []
		if 'pdfs' in data:
			pdfs = data.getlist('pdfs')
			del data['pdfs']

		parsed_actor_data = []
		if 'actor' in data:
			parsed_actor_data = json.loads(data['actor'])
			del data['actor']

		parsed_bank_data = []
		if 'bank' in data:
			parsed_bank_data = json.loads(data['bank'])
			if type(parsed_bank_data) == list:
				print(parsed_bank_data)
				parsed_bank_data = [str(d['id']) for d in parsed_bank_data]
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

		if len(pdfs) > 0:
			for pdf in pdfs:
				pdf_file = PDF_File.objects.create(pdf=pdf, company=company)
				pdf_file.save()
				print(company.pdfs)

		company.actor.clear()
		if len(parsed_actor_data) > 0:
			for d in parsed_actor_data:
				actor_obj = Actor.objects.get(id=d['id'])
				company.actor.add(actor_obj)

		company.bank.clear()
		if parsed_bank_data:
			for i in range(0, len(parsed_bank_data)):
				bank_obj = Bank.objects.get(id=int(parsed_bank_data[i]))
				company.bank.add(bank_obj)

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

		parsed_owner_data.actor_set.add(parsed_actor_data)
		parsed_owner_data.save()

		banker = Banker.objects.get(id=data['banker'])
		banker.actor_set.add(parsed_actor_data)
		banker.save()

		company.actor.add(parsed_actor_data)
		company.owner.add(parsed_owner_data)
		company.save()

		message = {'success': True, 'message': "Banker edited successfully"}
		return Response(message, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': "Error Updating Bank"}
		return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getUniqueRelations(req):
	try:
		companies = Company.objects.all()
		data = []
		for company in companies:
			owners = company.owner.all()
			banker = company.banker
			for owner in owners:
				print(company, owner, banker, "->", owner in banker.owner.all())
				if owner in banker.owner.all():
					actors_in_banker = banker.actor_set.all()
					actors_in_owner = owner.actor_set.all()

					for actor in actors_in_owner:
						if actor in actors_in_banker:
							data.append({'company': company.name, 'banker': banker.name, 'owner': owner.name, 'actor': actor.name})

		return Response(data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': "Error Getting Unique Relations"}
		return Response(message, status=status.HTTP_400_BAD_REQUEST)
