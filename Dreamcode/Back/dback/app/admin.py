from django.contrib import admin

from app.models import Product, Category, Person, Shipping

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Person)
admin.site.register(Shipping)