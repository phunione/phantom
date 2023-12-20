from django.contrib import admin
from .models import Banker


# Register your models here.
@admin.register(Banker)
class BankerAdmin(admin.ModelAdmin):
	list_display = ('name', 'rtds', 'rt', 'forex', 'demand',)
