from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer
from django.http import JsonResponse
import json
import time
import random


class ListTodo(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer(queryset)


def Additem(request):
    if(request.method == 'POST'):
        body = json.loads(request.body)
        print("##########request body###########", body)
        identity = int(time.time())+random.random()

        try:
            checkTitle = Todo.objects.get(title=body['data'])
            return JsonResponse({"msg": "Data exists,please enter again.", "status": "0"})
        except Todo.DoesNotExist as e:
            item = Todo.create_todo(identity, body["data"], True)
            body["id"] = json.dumps(identity)

            item.save()
            return JsonResponse({"msg": "Add request has been saved successfully.", "tofrontend": body, "status": "1"})


def Modifyitem(request):
    pass


def Deleteitem(request):
    if(request.method == 'DELETE'):
        body = json.loads(request.body)
        print("##########request body###########", body)
        deletetask = Todo.objects.filter(id=body['id']).delete()
        print("############delete item in database############", deletetask)
        return JsonResponse({"msg": "Delete request has been saved successfully.", "tofrontend": body, "status": "1"})
