from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=500)
    icon = models.TextField()

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'icon': self.icon
        }

class Product(models.Model):
    name = models.CharField(max_length=1000)
    price = models.IntegerField()
    description = models.TextField()
    img = models.TextField()
    rating = models.IntegerField()
    catName = models.CharField(max_length=500)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'img': self.img,
            'rating': self.rating,
            'catName': self.catName,
        }