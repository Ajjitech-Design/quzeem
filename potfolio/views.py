# from potfolio.forms import ContactForm
from django.shortcuts import render, redirect 
from django.core.mail import send_mail
from JOBS.models import Image, web

def ajibola(request):
    pics = Image.objects.order_by("-date")[:4]
    webs = web.objects.order_by("-date")[:4]
    
    if request.method == 'POST':
        name = request.POST.get('full-name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        data = {
            'name':name,
            'email':email,
            'subject': subject,
            'message': message
        }

        message ='''
        New message: {}


        From: {}
        '''.format(data['message'], data['email'])
        send_mail(data['subject'], message,'', ['asorirejibola52@gmail.com'])


       
       
    #     form = ContactForm(request.POST)
    #     if form.is_valid():

    #         return redirect ("ajibola")
    # else:
    #     form = ContactForm()
    return render(request, "portfolio.html",{"pics":pics, "webs":webs})

def service(request):
    return render(request, "service.html")


