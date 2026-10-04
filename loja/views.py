from rest_framework import viewsets
from .models import Categoria, Produto, Variacao
from .serializers import CategoriaSerializer, ProdutoSerializer, VariacaoSerializer
from rest_framework import generics, permissions
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Perfil
from rest_framework import serializers

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer

class VariacaoViewSet(viewsets.ModelViewSet):
    queryset = Variacao.objects.all()
    serializer_class = VariacaoSerializer

# Serializer para criar utilizadores
class RegistoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        # Cria automaticamente o perfil vazio associado ao utilizador
        Perfil.objects.create(user=user)
        return user

class RegistoView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegistoSerializer
    permission_classes = [permissions.AllowAny]

# Serializer e View para o Perfil
class PerfilSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    email = serializers.ReadOnlyField(source='user.email')

    class Meta:
        model = Perfil
        fields = ['username', 'email', 'telefone', 'morada', 'cidade', 'cep']

class PerfilDetailView(generics.RetrieveUpdateAPIView):
    queryset = Perfil.objects.all()
    serializer_class = PerfilSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        # Retorna sempre o perfil do utilizador que está autenticado no momento
        return self.request.user.perfil