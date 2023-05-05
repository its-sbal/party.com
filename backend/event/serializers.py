from rest_framework import serializers
from django.contrib.auth.models import User
from .models import vendor, user

class vendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = vendor
        fields = '__all__'

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'