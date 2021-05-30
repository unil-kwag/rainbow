from django.shortcuts import render

from rest_framework.serializers import Serializer
from rest_framework.viewsets import ModelViewSet

from menu_django.models import Users
from menu_django.serializers import UserSerializer
# Create your views here.

class UserViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserSerializer