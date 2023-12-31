from django.urls import path
from bank import views

urlpatterns = [
	path('add/', views.add, name='add-bank'),
	path('all/', views.getAll, name='get-all-banks'),
	path('<id>/', views.getOne, name='get-one-bank'),
	path('delete/<id>/', views.delete, name='delete-bank'),
	path('edit/<id>/', views.edit, name='edit-bank')
]
