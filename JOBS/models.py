from django.db import models

# Create your models here.
class Image(models.Model):
    caption = models.CharField( max_length=50)
    image = models.ImageField(upload_to="img/%y")
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.caption