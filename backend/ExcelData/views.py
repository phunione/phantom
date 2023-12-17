import json
import pandas as pd

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializers import ExcelDataSerializer
from .models import ExcelCompany


@api_view(['POST'])
def add(req):
	data = req.data
	print(data)
	try:
		start = int(data['start'])
		end = int(data['end'])
		excel = data['excel']
		exc = pd.read_excel(excel)
		headings = exc.keys()

		print(headings)

		for i in range(start, end):
			dataToPush = {}
			for x in headings:
				if x == "FIRST PARTNER" or x == "SECOND PARTNER":
					continue
				else:
					if (exc[x][i] == "" or exc[x][i] is None):
						print("none")
						fm = x
						fm = "".join(c for c in fm if c.isalnum())
						fm = fm.lower()
						dataToPush.update({fm: ""})
					else:
						fm = x
						fm = "".join(c for c in fm if c.isalnum())
						fm = fm.lower()
						dataToPush.update({fm: exc[x][i]})

			a, b = exc["FIRST PARTNER"][i].split('-')
			c, m = exc["SECOND PARTNER"][i].split('-')

			dataToPush.update({
				"ownername": [a, c],
				"ownerpan": [b, m],
			})

			print(dataToPush)
			excelcompany = ExcelCompany.objects.create(**dataToPush)
			excelcompany.save()

		message = {'success': True, 'message': "ExcelCompany added successfully"}
		return Response(message, status=status.HTTP_201_CREATED)
	except Exception as e:
		print('add error', e)
		message = {'success': False, 'error': 'Error Adding Company'}
		return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getAll(req):
	try:
		excelcompany = ExcelCompany.objects.all().order_by('id')
		company_serializer = ExcelDataSerializer(excelcompany, many=True)
		return Response(company_serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': 'Error Fetching excelCompanies'}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['Delete'])
def delete(request, id):
	try:
		excel = ExcelCompany.objects.get(id=id)
		excel.delete()
		message = {'success': True, 'message': "excel comapny deleted successfully"}
		return Response(message, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': e}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)
