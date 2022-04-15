from .views import *
from django.urls import path

urlpatterns = [
    path('', index),
    path('companies/', companies),
    path('companies/<int:company_id>/', companies_item),
    path('companies/<int:company_id>/vacancies', companies_vacancy),
    path('vacancy', vacancies),
    path('vacancy/<int:vacancy_id>/', vacancies_item),
    path('vacancy/top_ten/', vacancies_ten),
]
