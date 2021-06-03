from django.db import models
from django import forms
from django.db.models.fields import IntegerField
from django.db.models.fields.related import ForeignKey

# Create your models here.
class Users(models.Model): #회원테이블
     user_id = models.CharField(max_length=50,primary_key=True) #회원 id /PK
     user_pw = forms.CharField(widget=forms.PasswordInput) #회원 pw
     name = models.CharField(max_length=300) #회원 이름
     height = models.CharField(max_length=50) #키
     weight = models.CharField(max_length=50) #몸무게
     emaill = models.CharField(max_length=50) #회원 email
     create_at = models.DateField(auto_now_add=True) #가입일

     class Meta:
          db_table = 'users'

class Menus(models.Model): #식단테이블
    menu_id = models.ForeignKey(Users,on_delete=models.CASCADE, db_column="menu_id") #회원 id FK
    name = models.CharField(max_length=300) #음식 이름
    price = models.IntegerField() #음식 가격
    ea = models.IntegerField() #음식 수량, 중량
    create_at = models.DateField(auto_now_add=True) #작성일
    
    class Meta:
         db_table = 'menus'
         
class Kcal(models.Model): #식단테이블
    kcal_id = models.ForeignKey(Menus ,on_delete=models.CASCADE, db_column="kcal_id")
    name = models.CharField(max_length=50)
    kcal = models.IntegerField()
    ea = models.IntegerField()
    
    class Meta:
         db_table = 'kcal'
# Create your models here.
