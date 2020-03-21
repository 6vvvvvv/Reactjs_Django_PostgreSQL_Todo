from django.test import TestCase
from .models import Todo


class TodoModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Todo.objects.create(items='test function')
        
    def testItemsContent(self):
        todo=Todo.objects.get(key=1)
        expect_items=f'{todo.items}'
        self.assertEquals(expect_items,'test function')