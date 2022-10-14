from django import forms
from django.forms import ModelForm
from .models import Registration


class RegistrationForm(ModelForm):
    class Meta :
        model = Registration
        fields= ('name','email','department','university')
       