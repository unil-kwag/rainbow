from rest_framework.serializers import ModelSerializer
from menu_django import models

class UserSerializer(ModelSerializer):
    class Meta:
        model = models.Users
        fields = '__all__'

class MenuSerializer(ModelSerializer):
    class Meta:
        model = models.Menus
        fields = '__all__'