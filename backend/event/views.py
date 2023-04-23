from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import vendor
from .serializers import vendorSerializer

@api_view(['GET'])
def events(request):
    return Response('hello')

@api_view(['GET'])
def service(request):
    vendorList = vendor.objects.all()
    serializer = vendorSerializer(vendorList, many=True)
    return Response(serializer.data)