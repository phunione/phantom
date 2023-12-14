from django.urls import path
from . import views

urlpatterns = [
	path('all/', views.getAll, name='get-all-bankers'),
	path('<id>/', views.getOne, name='get-one-banker'),
 	path('<id>/', views.delete_one, name = 'delete-one-banker')
]
