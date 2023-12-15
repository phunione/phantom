from django.urls import path
from . import views

urlpatterns = [
	path('login/', views.Login.as_view(), name='login'),
	path('signup/', views.signup, name='signup'),
	path('<id>/', views.getOne, name='get-one-user'),
	path('<id>/', views.delete, name='delete-user')
]
