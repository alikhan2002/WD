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

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

class Product(models.Model):
    name = models.CharField(max_length=1000)
    price = models.FloatField()
    description = models.TextField()
    img = models.TextField()
    rating = models.FloatField()
    catName = models.CharField(max_length=500)
    cat_id = models.ForeignKey(Category, db_column="cat_id", on_delete=models.CASCADE)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'img': self.img,
            'rating': self.rating,
            'catName': self.catName,
            'cat_id': self.cat_id
        }




class Person(models.Model):
    username = models.CharField(max_length=200)
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone_number = models.IntegerField()
    e_mail = models.EmailField()
    password = models.CharField(max_length=100)

class Shipping(models.Model):
    fullname = models.CharField(max_length=400)
    shipping_type = models.CharField(max_length=30)
    address = models.CharField(max_length=300)
    user = models.ForeignKey(
        Person, on_delete=models.CASCADE
    )

    def to_json(self):
        return {
            'id': self.id,
            'fullName': self.fullname,
            'shipping_type': self.shipping_type,
            'address': self.address,
            'user': self.user_id
        }
