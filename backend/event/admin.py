from django.contrib import admin
from .models import user,vendor,orders
# Register your models here.

admin.site.register(user)
admin.site.register(vendor)
admin.site.register(orders)
