from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    prouser = models.OneToOneField(User, on_delete=models.CASCADE)


class Registration(models.Model):
    reg_user = models.OneToOneField(Profile, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length =200 ,null =True, blank =True)
    email = models.CharField(max_length =200 ,null =True, blank =True)
    department = models.CharField(max_length =200 ,null =True, blank =True)
    university = models.CharField(max_length =200 ,null =True, blank =True)
    createdAt = models.DateTimeField(auto_now_add =True)
    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return '%s ,%s ,%s ,%s' %(self.name,  self.email, self.department, self.university)
  