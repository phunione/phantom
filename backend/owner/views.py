from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Owner
from .serializers import OwnerSerializer


@api_view(['GET'])
def getAll(req):
	try:
		owner = Owner.objects.all()
		serializer = OwnerSerializer(owner, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {
			'success': False,
			'error': 'Error Fetching Owners'
		}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)
