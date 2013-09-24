from django.db import models
import os

APP_PATH = os.path.dirname(os.path.realpath(__file__ + '/../'))

class News(models.Model):
    def __unicode__(self):
        return self.title
    title = models.CharField( max_length = 200 )
    content = models.TextField()
    date = models.DateTimeField()
    
class Slider(models.Model):
    def __unicode__(self):
        return self.title
    title = models.CharField( max_length = 200 )
    link = models.URLField()
    image = models.ImageField( upload_to = APP_PATH + '/static/upload' )