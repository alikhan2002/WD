import json
from django.http import HttpResponse, JsonResponse
from app.models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from app.serializers import ProductSerializer
from django.shortcuts import Http404
from rest_framework.permissions import IsAuthenticated

def index(request):
    return HttpResponse("Привет, Мир!")

class CategoryProduct(APIView):
    def get_object(self, pk):
        try:
            return Product.objects.all().filter(catName=pk)
        except Product.DoesNotExist as e:
            raise Http404
    def get(self, request,pk):
        product = self.get_object(pk)
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, pk=None):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors)
class Products(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



class ProductItem(APIView):

    def get_object(self, pk):
        try:
            return Product.objects.get(id=pk)
        except Product.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        product = self.get_object(pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk=None):
        product = self.get_object(pk)
        serializer = ProductSerializer(instance=product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        product = self.get_object(pk)
        product.delete()
        return Response({"message":"succesfully deleted"}, status=204)

