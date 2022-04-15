import json
from django.http import HttpResponse, JsonResponse
from api.models import *
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return HttpResponse("Привет, Мир!")

@csrf_exempt
def companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        company_json = [company.to_json() for company in companies]
        return JsonResponse(company_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.create(id=data['id'],name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})
    return JsonResponse(company.to_json())
@csrf_exempt
def companies_item(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.id = data['id']
        company.name = data['name']
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


@csrf_exempt
def companies_vacancy(request, company_id):
    try:
        vacancy = Vacancy.objects.all().filter(company_id=company_id)
        vacancy_json = [vac.to_json() for vac in vacancy]
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(vacancy_json, safe=False)
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'message': 'deleted'}, status=204)

@csrf_exempt
def vacancies(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        try:
            vacancy = Vacancy.objects.create(id=data['id'], name=data['name'], company_id=data['company'])
        except Exception as e:
            return JsonResponse({'message': str(e)})

    return JsonResponse(vacancy.to_json(), safe=False)

@csrf_exempt
def vacancies_item(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id = vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)
    if request.method == "GET":
        return JsonResponse(vacancy.to_json(), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        vacancy.id = data['id']
        vacancy.name = data['name']
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({'message': 'deleted'}, status=204)


def vacancies_ten(request):
    try:
        vacancies = Vacancy.objects.all().order_by("-id")[:10]
        vacancy_json = [vacancy.to_json() for vacancy in vacancies]
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)
    return JsonResponse(vacancy_json, safe=False)

