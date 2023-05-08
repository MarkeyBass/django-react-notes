from django.urls import path
# from views import getRoutes
from . import views

# create the url patterns
urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('notes/', views.notesRouter, name='update-note'),
    path('notes/<str:pk>/', views.notesRouterWithId, name='update-note'),
]