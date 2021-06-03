from rest_framework.serializers import ModelSerializer
from menu import models

class UserSerializer(ModelSerializer):
    class Meta:
        model = models.Users
        fields = '__all__'

class MenuSerializer(ModelSerializer):
    class Meta:
        model = models.Menus
        fields = '__all__'

class KcalSerializer(ModelSerializer):
    class Meta:
        model = models.Kcal
        fields = '__all__'