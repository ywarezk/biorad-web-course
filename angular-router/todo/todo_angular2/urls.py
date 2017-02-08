from todo_angular2 import views
from django.conf.urls import url

urlpatterns = [
    url(r'^', views.index)
]