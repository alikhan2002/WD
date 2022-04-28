import json
from django.http import HttpResponse, JsonResponse
from app.models import *
from django.views.decorators.csrf import csrf_exempt

import logging

def index(request):
    return HttpResponse("Привет, Мир!")


@csrf_exempt
def category_product(request, category_name):
    try:
        product = Product.objects.all().filter(company_id=company_id)
        product_json = [vac.to_json() for vac in Product]
        print(product_json)
    except Product.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(product_json, safe=False)
    elif request.method == 'DELETE':
        product.delete()
        return JsonResponse({'message': 'deleted'}, status=204)

@csrf_exempt
def products(request):
    # permission_classes = (IsAuthenticated,)

    if request.method == "GET":
        products = Product.objects.all()
        products_json = [product.to_json() for product in products]
        return JsonResponse(products_json, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        try:
            product = Product.objects.create(id=data['id'], name=data['name'],price=data['price'], description=data['description'], img=data['img'], rating=data['rating'], catName=data['catName'] )
        except Exception as e:
            return JsonResponse({'message': str(e)})

    return JsonResponse(Product.to_json(), safe=False)

@csrf_exempt
def product_item(request, Product_id):
    try:
        product = Product.objects.get(id = Product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)
    if request.method == "GET":
        return JsonResponse(product.to_json(), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        product.id = data['id']
        product.name = data['name']
        product.save()
        return JsonResponse(product.to_json())
    elif request.method == "DELETE":
        product.delete()
        return JsonResponse({'message': 'deleted'}, status=204)



