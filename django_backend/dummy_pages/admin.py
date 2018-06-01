from django.contrib import admin
from .models import DummyPages
from django import forms

class DummyPagesAdminForm(forms.ModelForm):
    class Meta:
        model = DummyPages
        fields = '__all__'
        widgets = {
            'desc': forms.Textarea(attrs={'cols': 80, 'rows': 20}),
        }
class DummyPagesAdmin(admin.ModelAdmin):
    form = DummyPagesAdminForm
admin.site.register(DummyPages,DummyPagesAdmin)
# Register your models here.
