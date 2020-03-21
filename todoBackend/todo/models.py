from django.db import models

# Create your models here.


class Todo(models.Model):
    key = models.IntegerField(default="0")
    items = models.CharField(max_length=30, default="")
