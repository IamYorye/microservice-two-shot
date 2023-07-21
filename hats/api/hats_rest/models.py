from django.db import models
from django.urls import reverse

class LocationVO(models.Model):
    closet_name = models.CharField(max_length=100)
    import_href = models.CharField(max_length=200, null=True)


# Create your models here -> How we make our front-end a single page in the browser
class Hat(models.Model):
    fabric = models.CharField(max_length=200)
    style_name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    picture_url = models.URLField(null=True)
    location = models.ForeignKey(
        LocationVO,
        related_name="location",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_show_hat", kwargs={"pk": self.pk})

    def __str__(self):
        return self.style_name
