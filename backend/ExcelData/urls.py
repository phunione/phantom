from django.urls import path
from . import views

urlpatterns = [
	path('add/', views.add, name='add-excelcompanies'),
	path('all/', views.getAll, name='get-all-excelcompanies'),
]
