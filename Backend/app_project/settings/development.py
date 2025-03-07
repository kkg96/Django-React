from .base import *
from .configs import settings

DEBUG = settings.DEBUG

ALLOWED_HOSTS = ['localhost']

# Database
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": settings.DATABASE_NAME,
        "USER": settings.DATABASE_USER,
        "PASSWORD": settings.DATABASE_PASS,
        "HOST": settings.DATABASE_HOST,
        "PORT": settings.DATABASE_PORT,
    }
}