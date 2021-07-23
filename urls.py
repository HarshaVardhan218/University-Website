
from django.conf.urls import url
from UniversityApp import views

urlpatterns = [
url(r'detail/$',views.detailApi),
url(r'^detail/([0-9]+)$',views.detailApi),
]