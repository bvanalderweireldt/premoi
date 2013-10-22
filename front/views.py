from django.shortcuts import render
from front.models import Slider
from django.core.serializers import serialize
from django.core import serializers
from django.http import HttpResponse
from json import loads

#Return the home page
def home(request):
    return render(request, 'home.html', {})

#Return the sliders in json object
def sliders(request):
    json_serializer = serializers.get_serializer("json")()
    slidersJson = json_serializer.serialize(Slider.objects.all().order_by('id'), ensure_ascii=False)
    return HttpResponse(slidersJson, mimetype='application/json;charset=utf-8')