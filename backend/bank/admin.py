from django.contrib import admin

from .models import Bank


# Register your models here.
@admin.register(Bank)
class BankAdmin(admin.ModelAdmin):
	list_display = ('name', 'ifsc', 'ad_code', 'swift_code')
