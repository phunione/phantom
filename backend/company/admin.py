from django.contrib import admin

from .models import Company


# Register your models here.
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
	list_display = (
		'name', 'company_type', 'pan_number', 'pan_dob', 'company_status', 'isMaharashtra', 'state', 'querry_filled'
	)
