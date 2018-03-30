from rest_framework.routers import SimpleRouter

from . import views

app_name = 'api'

router = SimpleRouter()
router.register("events", views.EventViewSet, base_name='events')

urlpatterns = router.urls
