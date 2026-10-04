from rest_framework import serializers
from .models import Categoria, Produto, Variacao

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class VariacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variacao
        fields = '__all__'

class ProdutoSerializer(serializers.ModelSerializer):
    # Isto permite que os tamanhos e as quantidades em stock sejam enviados no mesmo pacote que o produto
    variacoes = VariacaoSerializer(many=True, read_only=True)
    categoria_nome = serializers.ReadOnlyField(source='categoria.nome')

    class Meta:
        model = Produto
        fields = '__all__'