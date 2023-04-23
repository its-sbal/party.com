from django.urls import path
from . import views
urlpatterns = [
    path('',views.events, name='events'),
    path('service/', views.service, name='service'), 
    
]
