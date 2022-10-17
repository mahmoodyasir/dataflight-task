from django.shortcuts import render
from django.views import View
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *
from .models import *
from rest_framework import status, views
from django.http import HttpResponseRedirect
from django.contrib import messages


class Viewindex(View):
    def get(self, request):
        return render(request, "registration/instructions.html")


def registration(request):
    submitted = False
    warning = False
    if request.method == 'POST':
        FirstName = request.POST.get('Fname')
        LastName = request.POST.get('Lname')
        email = request.POST.get('email')
        department = request.POST.get('department')
        university = request.POST.get('university')
        
        if Registration.objects.filter(email=email).exists():
            # messages.warning(request,'Email already exists')
            return HttpResponseRedirect('/?warning=True')
        else :
            form = Registration(name=FirstName+" "+LastName,email=email,department=department,university=university) 
            form.save()
            return HttpResponseRedirect('/?submitted=True')
        
        
    else:
        form = Registration
        if 'submitted' in request.GET:
            submitted = True
            
        if 'warning' in request.GET:
            warning = True
        
    return render(request,'registration/registration.html',{'form':form,'submitted':submitted,'warning':warning})
 
  
# @api_view(['POST'])
# def registration(request):
#     data = request.data
#     try:
#         registration = Registration.objects.create(
#             name = data['name'],
#             email = data['email'],
#             department = data['department'],
#             university = data['university'],
#          )
#         serializer = RegistrationSerializer(registration, many=False)
#         return Response(serializer.data)
#     except:
#         message = {'detail':'Email or Username has been taken!'}
#         return Response(message, status=status.HTTP_400_BAD_REQUEST)
    

# @api_view(['GET'])
# def getProducts(request):
#     registration = Registration.objects.all()
#     serializer = RegistrationSerializer(registration , many=True)
#     return Response(serializer.data)


class RegisterView(views.APIView):
    def post(self, request):
        data = request.data
        print(data)
        email = data["email"]
        name = data["first_name"] + " " + data["last_name"]
        university = data["university"]
        department = data["department"]

        serializers = UserSerializer(data=request.data)

        if serializers.is_valid():
            serializers.save()

            Registration.objects.create(
                reg_user=Profile.objects.get(prouser__username=email),
                name=name,
                email=email,
                department=department,
                university=university
            )

            return Response({"error": False, "message": f"User is created for '{serializers.data['username']}'"})
        return Response({"error": True, "message": "Something is wrong"})


