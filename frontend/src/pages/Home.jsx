import { useState, useEffect } from "react";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [mensagem, setMensagem] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/produtos/")
      .then((resposta) => resposta.json())
      .then((dados) => setProdutos(dados))
      .catch((erro) => console.error("Erro ao buscar produtos:", erro));
  }, []);

  // Função para adicionar produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    // Busca o carrinho atual do localStorage ou cria um array vazio
    const carrinhoAtual =
      JSON.parse(localStorage.getItem("carrinho_medmoda")) || [];

    // Adiciona o novo produto
    const novoCarrinho = [...carrinhoAtual, produto];

    // Salva de volta no localStorage
    localStorage.setItem("carrinho_medmoda", JSON.stringify(novoCarrinho));

    // Mostra um aviso rápido de sucesso
    setMensagem(`${produto.nome} foi adicionado ao carrinho!`);
    setTimeout(() => setMensagem(null), 2500);
  };

  return (
    <div>
      {/* Aviso flutuante de sucesso */}
      {mensagem && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm font-medium shadow-sm transition-all">
          {mensagem}
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
        Coleção de Outono
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                Sem imagem
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {produto.nome}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {produto.categoria_nome}
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-xl font-bold text-gray-900">
                R$ {produto.preco_base}
              </p>
              <button
                onClick={() => adicionarAoCarrinho(produto)}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
