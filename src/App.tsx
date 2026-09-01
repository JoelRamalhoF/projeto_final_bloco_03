import { Routes, Route } from "react-router-dom";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import Categorias from "./components/categoria/listacategoria/ListaCategoria";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/categorias" element={<Categorias />} />

          <Route
            path="/cadastrarcategoria"
            element={<FormCategoria />}
          />

          <Route
            path="/editarcategoria/:id"
            element={<FormCategoria />}
          />

          <Route
            path="/deletarcategoria/:id"
            element={<DeletarCategoria />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;