from django.shortcuts import render
from . models import Image, web 

# Create your views here.

app_name = "jobs"

def jobs_view(request):
    pics = Image.objects.all().order_by("-date")
    return render(request, "recent_jobs.html", {"pics":pics})

def WebJob(request):
    webs = web.objects.all().order_by("-date")
    return render(request, "web.html", {"webs":webs})