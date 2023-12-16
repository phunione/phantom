import json

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Owner
from actor.models import Actor
from banker.models import Banker
from company.models import Company
from .serializers import OwnerSerializer


@api_view(['POST'])
def add(req):
	data = req.data
	print(data)

	try:
		owner = Owner.objects.create(name=data['name'], adhar_number=data['adhar_number'], pan_number=data['pan_number'],
		                             din_number=data['din_number'], otp_phoneNr=data['otp_phoneNr'],
		                             sim_number=data['sim_number'], email=data['email'], per_phone=data['per_phone'],
		                             mother_name=data['mother_name'], address=data['address'], type=data['type'],
		                             )
		if data['pdfs'] != '':
			owner.pdfs = data['pdfs']

		if data['actor'] != '':
			parsed_data = json.loads(data['actor'])
			for d in parsed_data:
				actor_obj = Actor.objects.get(id=d['id'])
				owner.actor_set.add(actor_obj)

		if data['company'] != '':
			parsed_data = json.loads(data['company'])
			for d in parsed_data:
				company_obj = Company.objects.get(id=d['id'])
				owner.company_set.add(company_obj)

		if data['banker'] != '':
			parsed_data = json.loads(data['banker'])
			for d in parsed_data:
				banker_obj = Banker.objects.get(id=d['id'])
				owner.banker_set.add(banker_obj)

		owner.save()

		message = {
			'success': True,
			'message': 'Owner added successfully'
		}
		return Response(message, status=status.HTTP_201_CREATED)
	except Exception as e:
		print(e)
		message = {
			'success': False,
			'error': 'Error adding Owner'
		}
		return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getAll(req):
	try:
		owner = Owner.objects.all().order_by('id')
		serializer = OwnerSerializer(owner, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {
			'success': False,
			'error': 'Error Fetching Owners'
		}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['GET'])
def getOne(request, id):
	try:
		owner = Owner.objects.get(id=id)
		serializer = OwnerSerializer(owner, many=False)
		return Response(serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': e}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['DELETE'])
def delete(request, id):
	try:
		owner = Owner.objects.get(id=id)
		owner.delete()
		message = {'success': True, 'message': "Owner deleted successfully"}
		return Response(message, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': e}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['PUT'])
def edit(req, id):
	req_data = req.data
	data = req_data.copy()
	print(data)
	try:
		pdfs = ''
		if data['pdfs'] != '':
			pdfs = data['pdfs']
		del data['pdfs']

		parsed_actor_data = []
		if data['actor'] != '':
			parsed_actor_data = json.loads(data['actor'])
		del data['actor']

		parsed_company_data = []
		if data['company'] != '':
			parsed_company_data = json.loads(data['company'])
		del data['company']

		parsed_banker_data = []
		if data['banker'] != "":
			parsed_banker_data = json.loads(data['banker'])
		del data['banker']

		owner = Owner.objects.get(id=id)

		for key, value in data.items():
			setattr(owner, key, value)

		if pdfs != '':
			owner.pdfs = pdfs

		if parsed_actor_data:
			for d in parsed_actor_data:
				actor_obj = Actor.objects.get(id=d['id'])
				owner.actor_set.add(actor_obj)

		if parsed_company_data:
			for d in parsed_company_data:
				company_obj = Company.objects.get(id=d['id'])
				owner.company_set.add(company_obj)

		if parsed_banker_data:
			for d in parsed_banker_data:
				banker_obj = Banker.objects.get(id=d['id'])
				owner.banker_set.add(banker_obj)

		owner.save()

		message = {
			'success': True,
			'message': 'Owner edited successfully'
		}
		return Response(message, status=status.HTTP_201_CREATED)
	except Exception as e:
		print(e)
		message = {
			'success': False,
			'error': 'Error editing Owner'
		}
		return Response(message, status=status.HTTP_400_BAD_REQUEST)
