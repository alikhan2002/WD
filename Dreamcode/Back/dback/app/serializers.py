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


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=200)

    def create(self, validated_data):
        company = Company.objects.create(name=validated_data.get('name'))
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance

