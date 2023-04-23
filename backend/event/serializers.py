from rest_framework import serializers
from django.contrib.auth.models import User
from .models import vendor

class vendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = vendor
        fields = '__all__'