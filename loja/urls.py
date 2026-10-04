from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CategoriaViewSet, ProdutoViewSet, VariacaoViewSet, RegistoView, PerfilDetailView
from rest_framework.routers import DefaultRouter
import django.urls

router = DefaultRouter()
router.register(r'categorias', CategoriaViewSet)
router.register(r'produtos', ProdutoViewSet)
router.register(r'variacoes', VariacaoViewSet)

urlpatterns = [
    path('', django.urls.include(router.urls)),
    path('auth/registo/', RegistoView.as_view(), name='registo'),
    path('auth/login/', TokenObtainPairView.as_view(), name='login_token'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/perfil/', PerfilDetailView.as_view(), name='perfil_detalhe'),
]