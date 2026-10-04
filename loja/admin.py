from django.contrib import admin
from .models import Categoria, Produto, Variacao, Carrinho, ItemCarrinho, Pedido, ItemPedido, ListaDesejos, Perfil
admin.site.register(Categoria)
admin.site.register(Produto)
admin.site.register(Variacao)
admin.site.register(ListaDesejos)
admin.site.register(Carrinho)
admin.site.register(ItemCarrinho)
admin.site.register(Pedido)
admin.site.register(ItemPedido)
admin.site.register(Perfil)