from .views import *
from django.urls import path

urlpatterns = [
    path('', index),
    path('products/', product_list),
    path('products/<int:id>/', product_item),
    path('categories/', categories_list),
    path('categories/<int:id>/', category_item),
]
