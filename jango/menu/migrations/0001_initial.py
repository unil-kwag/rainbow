# Generated by Django 3.2.3 on 2021-06-02 16:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('user_id', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=300)),
                ('height', models.CharField(max_length=50)),
                ('weight', models.CharField(max_length=50)),
                ('emaill', models.CharField(max_length=50)),
                ('create_at', models.DateField(auto_now_add=True)),
            ],
            options={
                'db_table': 'users',
            },
        ),
        migrations.CreateModel(
            name='Menus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
                ('price', models.IntegerField()),
                ('ea', models.IntegerField()),
                ('create_at', models.DateField(auto_now_add=True)),
                ('menu_id', models.ForeignKey(db_column='menu_id', on_delete=django.db.models.deletion.CASCADE, to='menu.users')),
            ],
            options={
                'db_table': 'menus',
            },
        ),
        migrations.CreateModel(
            name='Kcal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('kcal', models.IntegerField()),
                ('ea', models.IntegerField()),
                ('kcal_id', models.ForeignKey(db_column='kcal_id', on_delete=django.db.models.deletion.CASCADE, to='menu.menus')),
            ],
            options={
                'db_table': 'kcal',
            },
        ),
    ]