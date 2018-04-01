from django.conf.urls import url

from rest_framework.routers import SimpleRouter

from . import views

app_name = 'api'

router = SimpleRouter()
router.register("events", views.EventViewSet, base_name='events')

urlpatterns = router.urls

urlpatterns += [
    url(r'^users/$', views.UserList.as_view(), name='userList'),
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view(), name='userDetail'),
    url(r'^users/(?P<user_pk>[0-9]+)/events/$', views.UserEventList.as_view(), name='userEventList'),
    url(r'^users/(?P<user_pk>[0-9]+)/events/(?P<date>[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))/$',
        views.UserEventList.as_view(), name='userEventList'),

    url(r'^user/$', views.AuthenticatedUserDetail.as_view(), name='authenticatedUserDetail'),
]
