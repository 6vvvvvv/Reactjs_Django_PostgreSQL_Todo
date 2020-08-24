from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer
from django.http import JsonResponse
import json
import time
import random
from django.db.models import Case, Value, When


class ListTodo(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer(queryset)


def Additem(request):
    if(request.method == 'POST'):
        body = json.loads(request.body)
        print("##########request body###########", body)
        identity = random.randint(1, 1000000)

        try:
            checkTitle = Todo.objects.get(title=body['data'])
            return JsonResponse({"msg": "Data exists,please enter again.", "status": "0"})
        except Todo.DoesNotExist as e:
            item = Todo.create_todo(identity, body["data"], False)
            body["id"] = json.dumps(identity)
            body["isedited"] = False
            item.save()
            return JsonResponse({"msg": "Add request has been saved successfully.", "tofrontend": body, "status": "1"})


def Modifyitem(request):
    if(request.method == 'PUT'):
        body = json.loads(request.body)
        print("********request body*******", body)
        data = body['data']['data']

        Todo.objects.filter(title=data).update(isedited=Case(
            When(isedited=False, then=Value(True)),
            default=Value(False)))

        edittask = Todo.objects.filter(title=data).values()

        return JsonResponse({"msg": "put success", "tofrontend": list(edittask)})


def Deleteitem(request):
    if(request.method == 'DELETE'):
        body = json.loads(request.body)
        print("##########request body###########", body)
        deletetask = Todo.objects.filter(id=body['id']).delete()
        print("############delete item in database############", deletetask)
        return JsonResponse({"msg": "Delete request has been saved successfully.", "tofrontend": body, "status": "1"})
