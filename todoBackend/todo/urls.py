from django.urls import path
from . import views

urlpatterns = [
    path('todolist/', views.ListTodo),
    path('additem/', views.Additem),
    path('modifyitem/', views.Modifyitem),
    path('deleteitem/', views.Deleteitem),
    path('updateitem/',views.Updateitem)
]
