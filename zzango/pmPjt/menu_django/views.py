from django.shortcuts import render

from rest_framework.serializers import Serializer
from rest_framework.viewsets import ModelViewSet

from menu_django import models
from menu_django import serializers
# Create your views here.

class UserViewSet(ModelViewSet):
    queryset = models.Users.objects.all()
    serializer_class = serializers.UserSerializer

class MenuViewSet(ModelViewSet):
    queryset = models.Menus.objects.all()
    serializer_class = serializers.MenuSerializer