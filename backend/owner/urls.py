from django.urls import path
from . import views

urlpatterns = [
	path('add/', views.add, name='add-owner'),
	path('all/', views.getAll, name='get-all-owners'),
	path('actor/all/', views.getAllActors, name='get-all-owner-actors'),
	path('<id>/', views.getOne, name='get-single-owner'),
	path('delete/<id>/', views.delete, name='delete-owner'),
	path('edit/<id>/', views.edit, name='edit-owner'),

]
