from django.urls import path
from api.views import companies, companies_item, Vacancies, VacancyItem, VacancyTopTen, CompaniesVacancy
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('companies/', companies),
    path('companies/<int:pk>/', companies_item),
    path('companies/<int:pk>/vacancies', CompaniesVacancy.as_view()),
    path('vacancy', Vacancies.as_view()),
    path('vacancy/<int:pk>/', VacancyItem.as_view()),
    path('vacancy/top_ten/', VacancyTopTen.as_view()),

    path('login/', obtain_jwt_token)
]
    