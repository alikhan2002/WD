import json
from django.http import HttpResponse, JsonResponse
from app.models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from app.serializers import *
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User


"""
Function Based View 
-------------------
"""
@api_view(['GET', 'POST'])
def users(request):
    if request.method == 'GET':
        users = Person.objects.all()
        serializer = PersonSerializer(users, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = PersonSerializer(data=data)
        print(data)
        user = User.objects.create_user(data['username'],
                                        data['e_mail'],
                                        data['password'])
        user.save()
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

# @api_view(['GET', 'PUT', 'DELETE'])
# def companies_item(request, pk):
#     try:
#         company = Company.objects.get(id=pk)
#     except Company.DoesNotExist as e:
#         return Response({"message": str(e)}, status=400)
#
#     if request.method == 'GET':
#         serializer = CompanySerializer(company)
#         return Response(serializer.data)
#     elif request.method == 'PUT':
#         data = json.loads(request.body)
#         serializer = CompanySerializer(instance=company, data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)
#     elif request.method == 'DELETE':
#         company.delete()
#         return Response({'message': 'deleted'}, status=204)



