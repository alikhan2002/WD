from rest_framework import serializers
from .models import *
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        read_only_fields =('id',)



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        read_only_fields = ('id',)



class PersonSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField(max_length=300)
    name = serializers.CharField(max_length=100)
    surname = serializers.CharField(max_length=100)
    phone_number = serializers.IntegerField()
    e_mail = serializers.EmailField()
    password = serializers.CharField(max_length=100)

    def create(self, validated_data):
        user = Person.objects.create(username=validated_data['username'],
                                    name=validated_data['name'],
                                   surname=validated_data['surname'],
                                   phone_number=validated_data['phone_number'],
                                   e_mail=validated_data['e_mail'],
                                   password=validated_data['password'])
        return user

    def update(self, instance, validated_data):
        instance.username = validated_data['username']
        instance.name = validated_data['name']
        instance.surname = validated_data['surname']
        instance.phone_number = validated_data['phone_number']
        instance.e_mail = validated_data['e_mail']
        instance.password = validated_data['password']
        instance.save()
        return instance




class ShippingSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    fullname = serializers.CharField(max_length=600)
    shipping_type = serializers.CharField(max_length=40)
    address = serializers.CharField(max_length=300)
    user_id = serializers.IntegerField()


    def create(self, validated_data):
        ship = Shipping.objects.create(fullname=validated_data['fullname'],
                                   shipping_type=validated_data['shipping_type'],
                                   address=validated_data['address'],
                                    user_id=validated_data['user_id'])
        return ship

    def retrieve(self):
        ship = Shipping.objects.all()
        return ship

    def update(self, instance, validated_data):
        instance.fullname = validated_data['fullname']
        instance.shipping_type = validated_data['shipping_type']
        instance.address = validated_data['address']
        instance.save()
        return instance





