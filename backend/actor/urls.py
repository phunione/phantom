from django.urls import path

from . import views

urlpatterns = [
	path('add/', views.add, name='add-actor'),
	path('all/', views.getAll, name='get-all-actors'),
	path('<id>/', views.getOne, name='get-one-actor'),
	path('delete/<id>/', views.delete, name='delete-actor'),
	path('edit/<id>/', views.edit, name='edit-actor')
 
]
