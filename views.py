
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from UniversityApp.models import Details
from UniversityApp.serializers import DetailSerializer

# Create your views here.
@csrf_exempt
def detailApi(request, id=0):
    if request.method=='GET':
        details = Details.objects.all()
        details_serializer = DetailSerializer(details, many=True)
        return JsonResponse(details_serializer.data, safe=False)
    elif request.method=='POST':
            detail_data=JSONParser().parse(request)
            detail_serializer = DetailSerializer(data=detail_data)
            if detail_serializer.is_valid():
                detail_serializer.save()
                return JsonResponse("Addedd Successfully!", safe=False)
            return JsonResponse("Failed to Add.",safe=False)
    elif request.method=='PUT':
            detail_data = JSONParser().parse(request)
            detail=Details.objects.get(DetailId=detail_data['DetailId'])
            detail_serializer=DetailSerializer(detail, data=detail_data)
            if detail_serializer.is_valid():
                detail_serializer.save()
                return JsonResponse("Updated Successfully!", safe=False)
            return JsonResponse("Failed to Update.",safe=False)  
    elif request.method=='DELETE':
            detail=Details.object.get(DetailId=id)
            detail.delete()
            return JsonResponse("Deleted Successfully!!",safe=False)
