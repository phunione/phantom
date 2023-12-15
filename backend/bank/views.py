# REST FRAMEWORK IMPORTS
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# Mine
from .models import Bank
from banker.models import Banker
from .serializers import BankSerializer


@api_view(['POST'])
def add(req):
	data = req.data
	try:
		banker_data = []
		if 'banker' in data:
			banker_data = data['banker']
			del data['banker']

		bank = Bank.objects.create(**data)

		if len(banker_data) > 0:
			for d in banker_data:
				banker_obj = Banker.objects.get(id=d['id'])
				bank.banker.add(banker_obj)

		bank.save()

		message = {'success': True, 'message': "Banker added successfully"}
		return Response(message, status=status.HTTP_201_CREATED)
	except Exception as e:
		print(e)
		return Response({'success': False, 'error': e}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
# Create your views here.
def getAll(request):
	try:
		bank = Bank.objects.all()
		bank_serializer = BankSerializer(bank, many=True)
		return Response(bank_serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': "Bankers not found"}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['GET'])
def getOne(request, id):
	try:
		bank = Bank.objects.get(id=id)
		serializer = BankSerializer(bank, many=False)
		return Response(serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': e}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['Delete'])
def delete(request, id):
	try:
		bank = Bank.objects.get(id=id)
		bank.delete()
		message = {'success': True, 'message': "Actor deleted successfully"}
		return Response(message, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': e}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)
