from django.shortcuts import render
from front.models import Slider
def home(request):
    sliders = Slider.objects.order_by('id')
    return render(request, 'home.html', { 'sliders' : sliders })