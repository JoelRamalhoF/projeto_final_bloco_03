import { WarningCircleIcon } from "@phosphor-icons/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {
  // Objeto responsável redirecionar a categoria para outra rota
  const navigate = useNavigate();

  // Estado responsável por controlar o loader
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Estado responsável por armazenar os dados da categoria que será deletada
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  // Acessar o parâmetro da rota
  const { id } = useParams<{ id: string }>();

  // Função responsável por buscar uma categoria pelo ID no Backend
  async function buscarCategoriaPorId() {
    setIsLoading(true);

    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(`Erro ao consultar a categoria: ${error.response?.status}`);
      } else {
        alert("Erro ao consultar a categoria.");
      }
      return;
    } finally {
      setIsLoading(false);
    }
  }

  // useEffect para monitorar o id
  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId();
    }
  }, [id]);

  // Função responsável por deletar uma categoria pelo ID no Backend
  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);

      alert("Categoria deletada com sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(`Erro ao deletar a categoria: ${error.response?.status}`);
      } else {
        alert("Erro ao deletar a categoria.");
      }
      return;
    } finally {
      setIsLoading(false);
    }

    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <main className="grow w-full max-w-xl mx-auto px-4 md:px-8 py-24 md:py-28 flex flex-col gap-8">
      <div className="flex flex-col items-center text-center gap-3 bg-white border border-slate-200 rounded-lg p-8">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-50 text-red-600">
          <WarningCircleIcon size={32} />
        </div>

        <h1 className="text-2xl font-semibold text-slate-800">
          Excluir Categoria
        </h1>

        <p className="text-base text-slate-600">
          Tem certeza que deseja excluir a categoria{" "}
          <span className="font-semibold text-slate-800">
            {categoria.nome}
          </span>
          ?
        </p>

        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            className="bg-green-600 text-white text-base px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <ClipLoader
                color="#ffffff"
                size={24}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>

          <button
            className="bg-red-600 text-white text-base px-6 py-3 rounded-lg border border-slate-300 hover:bg-red-700 transition-colors font-medium"
            onClick={retornar}
          >
            Não
          </button>
        </div>
      </div>
    </main>
  );
}

export default DeletarCategoria;