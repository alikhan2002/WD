import json
from django.http import HttpResponse, JsonResponse
from api.models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.serializers import VacancySerializer
from django.shortcuts import Http404
from rest_framework.permissions import IsAuthenticated

def index(request):
    return HttpResponse("Привет, Мир!")

class CompaniesVacancy(APIView):
    def get_object(self, pk):
        try:
            return Vacancy.objects.all().filter(company_id=pk)
        except Vacancy.DoesNotExist as e:
            raise Http404
    def get(self, request,pk):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, pk=None):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors)
class Vacancies(APIView):

    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



class VacancyItem(APIView):

    def get_object(self, pk):
        try:
            return Vacancy.objects.get(id=pk)
        except Vacancy.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response({"message":"succesfully deleted"}, status=204)

class VacancyTopTen(APIView):
    def get(self, request):
        try:
            vacancies = Vacancy.objects.all().order_by('-id')[:10]
            serializer = VacancySerializer(vacancies, many=True)
        except Vacancy.DoesNotExist as e:
            raise Http404

        return Response(serializer.data, status=status.HTTP_200_OK)
