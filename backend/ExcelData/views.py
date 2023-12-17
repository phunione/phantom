from django.shortcuts import render
import Excel_Company
# Create your views here.

import json
import pandas as pd
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializer import ExcelDataSerializer
from .models import ExcelCompany



@api_view(['POST'])
def add(req):
    try:
        data = req.data
        start = data['start']
        end = data['end']
        excel = data['excel']
        exc = pd.read_excel(excel)
        headings = exc.keys()
        
        for i in range(start,end):
                dataToPush = {}
                for x in headings:
                        if x == "FIRST PARTNER" or x =="SECOND PARTNER":
                                continue
                        else:
                                if(exc[x][i] == "" or exc[x][i] == None):
                                        print("none")
                                        x="".join(c for c in x if c.isalnum())
                                        x.lower();    
                                        dataToPush.update({x:""})
                                else:
                                        x="".join(c for c in x if c.isalnum())
                                        x.lower();
                                        dataToPush.update({x:exc[x][i]})
                
                a,b = exc["FIRST PARTNER"][i].split('-')
                c,m = exc["SECOND PARTNER"][i].split('-')
                
                dataToPush.update( {
                "ownername" : [a,c],
                "ownerpan" : [b,m],
                })
                excelcompany = ExcelCompany.objects.create(dataToPush)
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
		excelcompany = ExcelCompany.objects.all()
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
