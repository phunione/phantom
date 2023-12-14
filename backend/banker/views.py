from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Banker
from .serializers import BankerSerializer


@api_view(['GET'])
def getAll(req):
	try:
		banker = Banker.objects.all()
		banker_serializer = BankerSerializer(banker, many=True)
		return Response(banker_serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		message = {
			'success': False,
			'error': 'Error Fetching Bankers'
		}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)
@api_view(['GET'])
def getOne(request, id):
    try:
        banker =  Banker.objects.get(id = id)
        serializer = BankerSerializer(banker, many = False)
        return Response(serializer.data,status = status.HTTP_200_OK)
    except Exception as e:
        print(e)
        message = {'success': False, 'error': e}
        return Response(message, status=status.HTTP_418_IM_A_TEAPOT)
    
@api_view(['Delete'])
def delete_one(request,id):
    try:
        banker = Banker.objects.get(id = id)
        banker.delete()
        message = {'success': True, 'message': "Banker deleted successfully"}
        return Response(message,status = status.HTTP_200_OK)
    except Exception as e:
        print(e)
        message = {'success': False, 'error': e}
        return Response(message, status=status.HTTP_418_IM_A_TEAPOT)