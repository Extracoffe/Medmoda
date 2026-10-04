import { useState } from "react";
import { Link } from "react-router-dom";

function Carrinho() {
  // Inicializa o estado diretamente com os dados do localStorage (sem precisar de useEffect)
  const [carrinho, setCarrinho] = useState(() => {
    return JSON.parse(localStorage.getItem("carrinho_medmoda")) || [];
  });

  // Função para remover um item específico do carrinho
  const removerItem = (indexParaRemover) => {
    const novoCarrinho = carrinho.filter(
      (_, index) => index !== indexParaRemover,
    );
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho_medmoda", JSON.stringify(novoCarrinho));
  };

  // Calcula o preço total somando a base de preço de cada produto
  const total = carrinho.reduce(
    (acc, item) => acc + parseFloat(item.preco_base),
    0,
  );

  if (carrinho.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          O seu carrinho está vazio
        </h2>
        <p className="text-gray-500 mb-6">
          Parece que ainda não adicionou nenhuma peça da MedModa.
        </p>
        <Link
          to="/"
          className="bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
        >
          Explorar Coleção
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
        Carrinho de Compras
      </h2>

      <div className="space-y-4 mb-8">
        {carrinho.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
          >
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                {item.nome}
              </h3>
              <p className="text-sm text-gray-500">{item.categoria_nome}</p>
            </div>

            <div className="flex items-center gap-6">
              <span className="font-bold text-gray-900">
                R$ {item.preco_base}
              </span>
              <button
                onClick={() => removerItem(index)}
                className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors cursor-pointer"
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Resumo do Pedido */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">Total a pagar</p>
          <p className="text-2xl font-bold text-gray-900">
            R$ {total.toFixed(2)}
          </p>
        </div>
        <button
          onClick={() =>
            alert("Simulação de compra concluída com sucesso! Parabéns!")
          }
          className="bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors cursor-pointer"
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}

export default Carrinho;
