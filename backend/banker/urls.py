from django.urls import path
from . import views

urlpatterns = [
	path('add/', views.add, name='add-banker'),
	path('all/', views.getAll, name='get-all-bankers'),
	path('<id>/', views.getOne, name='get-one-banker'),
	path('delete/<id>/', views.delete, name='delete-banker'),
	path('edit/<id>/', views.edit, name='edit-bank')
 
]
