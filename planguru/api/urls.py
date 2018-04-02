from django.conf.urls import url

from . import views

app_name = 'api'
urlpatterns = [
    url(r'^users/$', views.UserList.as_view(), name='userList'),
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view(), name='userDetail'),

    url(r'^events/$',
        views.EventList.as_view(), name='eventList'),
    url(r'^events/(?P<user_pk>[0-9]+)/$',
        views.EventList.as_view(), name='eventList'),
    url(r'^events/(?P<user_pk>[0-9]+)/(?P<date>[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))/$',
        views.EventList.as_view(), name='eventList'),

    url(r'^users/authenticated/$', views.AuthenticatedUserDetail.as_view(), name='authenticatedUserDetail'),
]
