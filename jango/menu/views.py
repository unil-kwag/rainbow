from django.shortcuts import render

# Create your views here.
from rest_framework.serializers import Serializer
from rest_framework.viewsets import ModelViewSet

from menu import models
from menu import serializers
# Create your views here.

class UserViewSet(ModelViewSet):
    queryset = models.Users.objects.all()
    serializer_class = serializers.UserSerializer

class MenuViewSet(ModelViewSet):
    queryset = models.Menus.objects.all()
    serializer_class = serializers.MenuSerializer

class KcalViewSet(ModelViewSet):
    queryset = models.Kcal.objects.all()
    serializer_class = serializers.KcalSerializer