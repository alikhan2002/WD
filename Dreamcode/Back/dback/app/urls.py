from app.views import *
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from app.views import index

urlpatterns = [
    path('', index),
    path('category/pk', CategoryProduct.as_view()),
    path('products/', Products.as_view()),
    path('products/crud/', Products.as_view()),
    path('products/crud/<int:pk>', ProductItem.as_view()),
    path('login/', obtain_jwt_token),
    path('user/', users),
    path('user/<int:pk>/', user_item),
    path('shipping/', shipping)
]
