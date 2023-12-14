from django.urls import path
from . import views

urlpatterns = [
	path('all/', views.getAll, name='get-all-owners'),
	# path('<id>/', views.getSingle, name='get-single-owner'),
]
