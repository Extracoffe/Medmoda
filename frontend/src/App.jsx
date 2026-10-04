import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* Cabeçalho da Loja */}
        <header className="flex justify-between items-center bg-white shadow-sm px-8 py-5 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            MedModa
          </h1>

          <nav className="flex gap-6">
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/carrinho"
              className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
            >
              Carrinho
            </Link>
            <Link
              to="/perfil"
              className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
            >
              Perfil
            </Link>
          </nav>
        </header>

        {/* Área onde as páginas são carregadas */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
