from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import vendor, user

from .serializers import vendorSerializer, userSerializer

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

@api_view(['GET'])
def cart(request):
    userList = user.objects.all()
    serializerC = userSerializer(userList, many=True)
    return Response(serializerC.data)

@api_view(['GET'])
def service_detail(request, vendor_id):
    try:
        vendor_obj = vendor.objects.get(pk=vendor_id)
    except vendor.DoesNotExist:
        return Response(status=404)

    serializer = vendorSerializer(vendor_obj)
    return Response(serializer.data)
    
@api_view(['GET'])
def cart_detail(request, user_id):
    try:
        user_obj = user.objects.get(pk=user_id)
    except user.DoesNotExist:
        return Response(status=404)

    serializerC = userSerializer(user_obj)
    return Response(serializerC.data)


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

@csrf_exempt
def cartUpdate(request):
    if request.method == "POST":
        data = json.loads(request.body)
        fName = data["fName"]
        lName = data["lName"]
        email = data["email"]
        address = data["address"]
        mobile = data["mobile"]
        totalPrice = data["totalPrice"]
        my_array_field = data["my_array_field"]
        # save to database
        user.objects.create(fName=fName, lName=lName, email=email, address=address, mobile=mobile, totalPrice=totalPrice, my_array_field=my_array_field)
        return JsonResponse({"status": "success"})
    

