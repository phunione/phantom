from django.urls import path
from . import views

urlpatterns = [
	path('add/', views.add, name='add-owner'),
	path('all/', views.getAll, name='get-all-owners'),
	# path('<id>/', views.getSingle, name='get-single-owner'),
]
