from django.urls import path
from . import views

urlpatterns = [
    path('todolist/', views.ListTodo.as_view({'get': 'list'})),
    path('additem/', views.Additem),
    path('modifyitem/', views.Modifyitem),
    path('deleteitem/', views.Deleteitem),
]
