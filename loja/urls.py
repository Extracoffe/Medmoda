from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoriaViewSet, ProdutoViewSet, VariacaoViewSet

# O router cria as rotas automaticamente (GET, POST, PUT, DELETE)
router = DefaultRouter()
router.register(r'categorias', CategoriaViewSet)
router.register(r'produtos', ProdutoViewSet)
router.register(r'variacoes', VariacaoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]