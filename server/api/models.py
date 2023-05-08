from django.db import models

# Create your models here.

class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True) # auto_now_add - will be saved on the creation only

    # representation string for the admin pannel
    def __str__(self):
        return self.body[0:50] # the representaion will be first 50 characters
