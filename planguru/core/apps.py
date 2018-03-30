from django.apps import AppConfig


class CoreConfig(AppConfig):
    name = 'planguru.core'
    verbose_name = "Core"

    def ready(self):
        import planguru.core.signals
        pass
