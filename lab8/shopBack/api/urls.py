from .views import *
from django.urls import path

urlpatterns = [
    path('', index),
    path('products/', product_list),
    path('products/<int:product_id>/', product_item),
    path('categories/', categories_list),
    path('categories/<int:category_id>/', category_item),
    path('categories/<int:category_id>/products/', productsByCategory),
]
