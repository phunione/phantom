# REST FRAMEWORK
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# My Models
from bank.models import Bank
from actor.models import Actor
from .serializers import ActorSerializer


# Create your views here.
@api_view(['POST'])
def add(request):
	"""
	API view to add an Actor.

	Parameters:
			request (HttpRequest): The HTTP request object.

	Returns:
			response (Response): The HTTP response object.

	Raises:
			Exception: If an error occurs while adding the Actor.
	"""
	data = request.data
	print(data)
	try:
		actor = Actor.objects.create(**data)
		if 'bank' in data:
			bank_ids = [obj['id'] for obj in data['bank']]
			print(bank_ids)
		# bank_obj = Bank.objects.filter(id__in=data['bank']['id'])
		# actor.bank = bank_obj
		# print(bank_obj)

		message = {'success': True, 'message': "Actor added successfully"}
		return Response(message, status=status.HTTP_201_CREATED)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': "Actor not added successfully"}
		return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getAll(request):
	try:
		actor = Actor.objects.all()
		serializer = ActorSerializer(actor, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
	except Exception as e:
		print(e)
		message = {'success': False, 'error': 'Error Fetching Actors'}
		return Response(message, status=status.HTTP_418_IM_A_TEAPOT)


@api_view(['GET'])
def getOne(request, id):
    try:
        actor = Actor.objects.get(id = id)
        serializer = ActorSerializer(actor, many = False)
        return Response(serializer.data,status = status.HTTP_200_OK)
    except Exception as e:
        print(e)
        message = {'success': False, 'error': e}
        return Response(message, status=status.HTTP_418_IM_A_TEAPOT)
    
@api_view(['Delete'])
def delete_one(request,id):
    try:
        actor = Actor.objects.get(id = id)
        actor.delete()
        message = {'success': True, 'message': "Actor deleted successfully"}
        return Response(message,status = status.HTTP_200_OK)
    except Exception as e:
        print(e)
        message = {'success': False, 'error': e}
        return Response(message, status=status.HTTP_418_IM_A_TEAPOT)