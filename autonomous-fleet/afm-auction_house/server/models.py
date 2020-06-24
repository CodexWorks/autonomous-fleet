from django.db import models
class Text(models.Model):
    headline = models.CharField(max_length=100, blank=True, null=True)
    body_text = models.TextField(blank=True, null=True)
    pub_date = models.DateField('publishing date')

    def __str__(self):
        return self.headline

class Orders(models.Model):
    pass
# new || assigned || active || completed