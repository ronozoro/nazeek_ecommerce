from django.db import models
from django.utils.text import slugify


def image_upload_to(instance, filename):
    title = instance.page_type
    slug = slugify(title)
    basename, file_extension = filename.split(".")
    new_filename = "%s-%s.%s" % (slug, instance.id, file_extension)
    return "dummy_pages/%s/%s" % (slug, new_filename)


class DummyPages(models.Model):
    Choices_MUL = (
        ('about', 'About US'),
        ('terms', 'Terms'),
        ('privacy', 'Privacy'),
        ('faq', 'FAQ'),
        ('delivery', 'Delivery'),
        ('exchange', 'Exchange'),
    )
    page_type = models.CharField(max_length=250,
                                 choices=Choices_MUL,
                                 default='about', )
    image = models.ImageField(upload_to=image_upload_to)
    desc = models.CharField(max_length=2000)

    def __str__(self):
        return self.page_type