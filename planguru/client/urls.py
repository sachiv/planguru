from django.conf.urls import url

from . import views

app_name = 'client'
urlpatterns = [
    url(r'^$', views.HomeView.as_view()),
]
