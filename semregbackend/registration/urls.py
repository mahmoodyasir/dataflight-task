from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('', Viewindex.as_view(), name='registration'),
    path('register/', RegisterView.as_view(), name="register")
]
