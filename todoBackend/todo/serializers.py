from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'key',
            'items',
        )
        model = Todo
