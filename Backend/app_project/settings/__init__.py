from .configs import settings
from .base import *

if settings.DJANGO_DEVELOPMENT == 'production':
   print("Production Server Started")
   from .production import *
else:
   print("Development Server Started")
   from .development import *