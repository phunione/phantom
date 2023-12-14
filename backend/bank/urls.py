from django.urls import path
from bank import views

urlpatterns = [
	path('all/', views.getAll, name='get-all-bankers'),
]
