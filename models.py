
from django.db import models
# Create your models here.
class Details(models.Model):
    DetailId = models.AutoField(primary_key=True)
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    IntialName = models.CharField(max_length=100)
    
    Gender = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
   
    Address = models.CharField(max_length=100)
    City = models.CharField(max_length=100)
    State = models.CharField(max_length=100)
    Country= models.CharField(max_length=100)
   
    Payment= models.CharField(max_length=100)
