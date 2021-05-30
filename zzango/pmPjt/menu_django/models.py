from django.db import models

# Create your models here.
class Users(models.Model): #회원테이블
     name = models.CharField(max_length=300)

class Menus(models.Model): #식단테이블
    name = models.CharField(max_length=300)