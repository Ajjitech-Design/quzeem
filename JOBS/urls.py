from django.urls import path
from . import views


app_name= "JOBS"
urlpatterns = [
    path ('', views.jobs_view, name="jobs")
]