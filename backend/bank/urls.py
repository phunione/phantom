from django.urls import path
from bank import views

urlpatterns = [
	path('all/', views.getAll, name='get-all-bankers'),
	path('<id>/', views.getOne, name='get-one-bank'),
 	path('<id>/', views.delete_one, name = 'delete-one-bank')
]
