from django.contrib import admin
from .models import ExcelCompany


# Register your models here.
@admin.register(ExcelCompany)
class ExcelCompanyAdmin(admin.ModelAdmin):
	list_display = (
		'companyname', 'mailid', 'ownerpan', 'ownername', 'panno', 'dob', 'querydate', 'mobileno', 'status', 'jurisdiction',
		'trnno',)
