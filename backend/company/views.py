from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializers import CompanySerializer
from .models import Company


@api_view(['GET'])
def getAll(req):
	try:
		company = Company.objects.all()
		company_serializer = CompanySerializer(company, many=True)
		return Response(company_serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		message = {success: False, error: e}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)
@api_view(['GET'])
def getOne(request, id):
    try:
        company =  Company.objects.get(id = id)
        serializer = CompanySerializer(company, many = False)
        return Response(serializer.data,status = status.HTTP_200_OK)
    except Exception as e:
        print(e)
        message = {'success': False, 'error': e}
        return Response(message, status=status.HTTP_418_IM_A_TEAPOT)
    
@api_view(['Delete'])
def delete_one(request,id):
    try:
        banker = Company.objects.get(id = id)
        banker.delete()
        message = {'success': True, 'message': "Comapny deleted successfully"}
        return Response(message,status = status.HTTP_200_OK)
    except Exception as e:
        print(e)
        message = {'success': False, 'error': e}
        return Response(message, status=status.HTTP_418_IM_A_TEAPOT)