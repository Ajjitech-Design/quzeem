from django.shortcuts import render
from . models import Image 

# Create your views here.
def jobs_view(request):
    pics = Image.objects.all().order_by("-date")
    return render(request, "recent_jobs.html", {"pics":pics})