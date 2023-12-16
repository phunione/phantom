from django.shortcuts import render
import Excel_Company
# Create your views here.

import json
import pandas as pd
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# from .serializers import ExcelDataSerializer
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
                                        
                                        dataToPush.update({x:""})
                                else:
                                        dataToPush.update({x:exc[x][i]})
                
                a,b = exc["FIRST PARTNER"][i].split('-')
                c,m = exc["SECOND PARTNER"][i].split('-')
                
                dataToPush.update( {
                "OwnerName" : [a,c],
                "OwnerPan" : [b,m],
                })
                excelcompany = ExcelCompany.objects.create(dataToPush)
                excelcompany.save()
        
        message = {'success': True, 'message': "ExcelCompany added successfully"}
        return Response(message, status=status.HTTP_201_CREATED)
    except Exception as e:
        print('add error', e)
        message = {'success': False, 'error': 'Error Adding Company'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


