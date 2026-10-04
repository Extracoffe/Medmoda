from django.contrib import admin
from .models import Categoria, Produto, Variacao, ListaDesejos, Carrinho, ItemCarrinho, Pedido, ItemPedido

admin.site.register(Categoria)
admin.site.register(Produto)
admin.site.register(Variacao)
admin.site.register(ListaDesejos)
admin.site.register(Carrinho)
admin.site.register(ItemCarrinho)
admin.site.register(Pedido)
admin.site.register(ItemPedido)