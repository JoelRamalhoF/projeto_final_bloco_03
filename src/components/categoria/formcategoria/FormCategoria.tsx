import axios from "axios";
import {
  useEffect,
  useState,
  type ChangeEvent,
  type SyntheticEvent,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";

function FormCategoria() {
  // Objeto responsável redirecionar a categoria para uma outra rota
  const navigate = useNavigate();

  // Estado responsável por controlar o loader
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Estado responsável por armazenar os dados da categoria
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

  // Função responsável por atualizar o estado categoria
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  // Função responsável por enviar uma requisição POST ou PUT
  async function gerarNovaCategoria(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias/${id}`, categoria, setCategoria);

        alert("Categoria atualizada com sucesso!");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(`Erro ao atualizar a categoria: ${error.response?.status}`);
        }
        return;
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);

        alert("Categoria cadastrada com sucesso!");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(`Erro ao cadastrar a categoria: ${error.response?.status}`);
        }
        return;
      } finally {
        setIsLoading(false);
      }
    }

    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <main className="grow w-full max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 text-center">
          {id === undefined ? "Cadastrar" : "Editar"} Categoria
        </h1>
      </div>

      <form
        className="flex flex-col gap-5 bg-white border border-slate-200 rounded-lg p-6 md:p-8"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="nome"
            className="text-sm font-medium text-slate-700"
          >
            Nome
          </label>

          <input
            id="nome"
            name="nome"
            type="text"
            required
            className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Ex: Medicamentos"
            value={categoria.nome || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              atualizarEstado(e)
            }
          />
        </div>

        <div className="flex items-center justify-center gap-3 mt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white text-base px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>
                {id === undefined ? "Cadastrar" : "Atualizar"} Categoria
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={retornar}
            className="text-base px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors font-medium"
          >
            Cancelar
          </button>
        </div>
      </form>
    </main>
  );
}

export default FormCategoria;