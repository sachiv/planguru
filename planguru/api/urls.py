from django.conf.urls import url

from rest_framework.routers import SimpleRouter

from . import views

app_name = 'api'

router = SimpleRouter()
router.register("events", views.EventViewSet, base_name='events')

urlpatterns = router.urls

urlpatterns += [
    url(r'^users/$', views.UserList.as_view(), name='userList'),
    url(r'^user/$', views.UserDetail.as_view(), name='userDetail'),
]
