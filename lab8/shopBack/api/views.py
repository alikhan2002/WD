from curses.ascii import HT
# from math import prod
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# Create your views here.
from api.models import *



def index(request):
    return HttpResponse("Привет, Мир!")

def product_list(request):
    products =  Product.objects.all()
    products_json = [product.to_json() for product in products]
    print(products_json)
    return JsonResponse(products_json, safe = False)

def product_item(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({"message":str(e)}, status = 400)
    return JsonResponse(product.to_json())
        
   

def categories_list(request):
    categories =  Category.objects.all()
    category_json = [category.to_json() for category in categories]
    return JsonResponse(category_json, safe=False)

def category_item(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({"message":str(e)}, status = 400)
    return JsonResponse(category.to_json())

def productsByCategory(request, category_id):
    try:
        categories = Product.objects.all().filter(category=category_id)
        category_json = [category.to_json() for category in categories]
        # print(category_json)
    except Category.DoesNotExist as e:
        return JsonResponse({"message":str(e)}, status = 400)
    return JsonResponse(category_json, safe = False)
            
    


