from django.urls import path
from . import views

urlpatterns = [
	path('add/', views.add, name='add-owner'),
	path('all/', views.getAll, name='get-all-owners'),
	path('<id>/', views.getOne, name='get-single-owner'),
	path('delete/<id>/', views.delete_one, name='delete-single-owner'),

]
