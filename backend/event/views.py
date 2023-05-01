from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import vendor
from .serializers import vendorSerializer

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@api_view(['GET'])
def events(request):
    return Response('hello')

@api_view(['GET'])
def service(request):
    vendorList = vendor.objects.all()
    serializer = vendorSerializer(vendorList, many=True)
    return Response(serializer.data)


@csrf_exempt
def serviceUpdate(request):
    if request.method == "POST":
        data = json.loads(request.body)
        # process data and save to database
        # for example:
        name = data["Name"]
        service = data["Service"]
        description = data["Description"]
        price = data["Price"]
        email = data["email"]
        # save to database
        vendor.objects.create(vendorName=name, service=service, description=description, price=price, email=email)
        return JsonResponse({"status": "success"})