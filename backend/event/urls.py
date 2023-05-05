from django.urls import path
from . import views
urlpatterns = [
    path('',views.events, name='events'),
    path('service/', views.service, name='service'), 
    path('service/<int:vendor_id>/', views.service_detail, name='service_detail'),

    path('serviceUpdate/', views.serviceUpdate, name='your-api-view'),
    path('cartUpdate/', views.cartUpdate, name='cart-view'),

    path('cart/', views.cart, name='cart'),
    path('cart/<int:user_id>/', views.cart_detail, name='cart_detail'),


    
]
