from .models import Todo
from django.http import JsonResponse
import json
import time
import random
from django.db.models import Case, Value, When


def ListTodo(request):
    if(request.method == 'GET'):
        queryset = Todo.objects.all().values()

        return JsonResponse({"msg": "List request success", "tofrontend": list(queryset)})


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

            item.save()

            body["id"] = identity
            body["isedited"] = False
            return JsonResponse({"msg": "Add request has been saved successfully.", "tofrontend": body, "status": "1"})


def Modifyitem(request):
    if(request.method == 'PUT'):
        body = json.loads(request.body)
        print("********request body*******", body)

        # if(body['data']['data']):
        #     data = body['data']['data']
        # else:
        #     data = body['data']['title']

        data =body['data']['data']

        Todo.objects.filter(title=data).update(isedited=Case(
            When(isedited=False, then=Value(True)),
            default=Value(False)))

        edittask = Todo.objects.filter(title=data).values()

        return JsonResponse({"msg": "toggle success", "tofrontend": list(edittask)})


def Updateitem(request):
    if(request.method == 'PUT'):
        body = json.loads(request.body)
        print("********request body*******", body)
        changetitle = body['item'][0]
        changedid = body['item'][1]
        Todo.objects.filter(id=changedid).update(title=changetitle)

        changetask = Todo.objects.filter(id=changedid).values()

        return JsonResponse({"msg": "update success", "tofrontend": list(changetask)})


def Deleteitem(request):
    if(request.method == 'DELETE'):
        body = json.loads(request.body)
        print("##########request body###########", body)
        deletetask = Todo.objects.filter(id=body['id']).delete()
        print("############delete item in database############", deletetask)
        return JsonResponse({"msg": "Delete request has been saved successfully.", "tofrontend": body, "status": "1"})
