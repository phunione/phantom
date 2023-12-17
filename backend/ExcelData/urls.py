from django.urls import path
from . import views

urlpatterns = [
	path('add/', views.add, name='add'),
	path('all/', views.getAll, name='get-all-excelcompanies'),
	path('delete/<id>/', views.delete, name='delete-company'),

]
