from django.urls import path
from . import views

urlpatterns = [
	path('all/', views.getAll, name='get-all-companies'),
 	path('<id>/', views.getOne, name='get-one-company'),
 	path('<id>/', views.delete_one, name = 'delete-one-company')
]
