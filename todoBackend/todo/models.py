from django.db import models

# Create your models here.


class Todo(models.Model):
    id = models.CharField(
        primary_key=True, max_length=200, default="")
    title = models.CharField(max_length=30, default="")
    isedited = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    @classmethod
    def create_todo(cls, id, title, isedited):
        event = cls(
            id=id, title=title, isedited=isedited)
        return event
