from rest_framework import serializers
from UniversityApp.models import Details


class DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Details
        fields = ('DetailId',
                'FirstName',
                'LastName',
                'IntialName',
               
                'Gender',
                'Email',
               
                'Address',
                'City',
                'State',
                'Country',
                
                'Payment',)
