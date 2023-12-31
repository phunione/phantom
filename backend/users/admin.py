from django.contrib import admin
from . import models


# Register your models here.
@admin.register(models.User)
class Admin(admin.ModelAdmin):
	list_display = ['email', 'first_name', 'last_name', 'dob', 'date_joined', 'is_superuser', 'is_excel_company_user',
	                'is_staff', 'is_active']
