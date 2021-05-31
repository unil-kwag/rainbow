from django.db import models
from django import forms
from django.db.models.fields.related import ForeignKey
# Create your models here.
class Users(models.Model): #회원테이블
     user_id = models.CharField(max_length=50,primary_key=True) #회원 id
     user_pw = forms.CharField(widget=forms.PasswordInput)
     name = models.CharField(max_length=300) #회원 이름
     height = models.FloatField() #키
     weight = models.FloatField() #몸무게
     email = models.EmailField()
     create_at = models.DateField(auto_now_add=True)

     class Meta:
          db_table = 'users'

class Menus(models.Model): #식단테이블
    menu_id = models.ForeignKey(Users,on_delete=models.CASCADE, db_column="menu_id")
    name = models.CharField(max_length=300)
    price = models.IntegerField()
    ea = models.IntegerField()
    create_at = models.DateField(auto_now_add=True)
    
    class Meta:
         db_table = 'menus'
    