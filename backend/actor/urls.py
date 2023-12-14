from django.urls import path

from . import views

urlpatterns = [
	path('add/', views.add, name='add-actor'),
	path('all/', views.getAll, name='get-all-actors'),
	path('<id>/', views.getOne, name='get-one-actor'),
 	path('<id>/', views.delete_one, name = 'delete-one-actor')
]
