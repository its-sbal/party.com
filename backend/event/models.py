from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class user(models.Model):
    _id = models.AutoField(primary_key=True)
    fName = models.CharField(max_length=100,null=True,blank=True)
    lName = models.CharField(max_length=100,null=True,blank=True)
    email = models.CharField(max_length=100,null=True,blank=True)
    address = models.TextField(max_length=100,null=True,blank=True)
    mobile = models.IntegerField(null=True,blank=True)
    totalPrice = models.DecimalField(null=True,max_digits=5, decimal_places=2)
    my_array_field = models.JSONField(default=list)

    def __str__(self):
        return self.fName
    
class vendor(models.Model):
    _id = models.AutoField(primary_key=True)
    vendorName = models.CharField(max_length=100,null=True,blank=True)
    service = models.CharField(max_length=100,null=True,blank=True)
    numReview = models.IntegerField(null=True,blank=True)
    rating = models.IntegerField(null=True, blank=True, validators=[MinValueValidator(1),MaxValueValidator(10)])
    description = models.TextField(max_length=1000, null=True, blank=True)
    image = models.ImageField(null=True,blank=True)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    email = models.CharField(max_length=100,null=True,blank=True)
    password = models.CharField(max_length=100,null=True,blank=True)
    mobile = models.IntegerField(null=True,blank=True)
    address = models.TextField(max_length=100,null=True,blank=True)

    def __str__(self):
        return self.vendorName

