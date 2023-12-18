from django.urls import path
from . import views

urlpatterns = [
	path('add/', views.add, name='add-company'),
	path('all/', views.getAll, name='get-all-companies'),
	path('<id>/', views.getOne, name='get-one-company'),
	path('delete/<id>/', views.delete, name='delete-company'),
	path('edit/<id>/', views.edit, name='edit-company'),
	path('edit-relation/<id>/', views.editRelation, name='edit-relations-company'),
	path('unique-relation/all/', views.getUniqueRelations, name='get-unique-relations-company'),
]
