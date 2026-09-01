  import { WarningCircleIcon } from "@phosphor-icons/react";
  import { useEffect, useState } from "react";
  import { Link, useNavigate, useParams } from "react-router-dom";
  import type Produto from "../../../models/Produto";
  import { buscar, deletar } from "../../../services/Service";

  function DeletarProduto() {
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const [produto, setProduto] = useState<Produto>({} as Produto);

    useEffect(() => {
      if (id !== undefined) {
        buscarPorId(id);
      }
    }, [id]);

    async function buscarPorId(id: string) {
      try {
        await buscar(`/produtos/${id}`, setProduto);
      } catch (error) {
        console.error(error);
      }
    }

    async function deletarProduto() {
      try {
        await deletar(`/produtos/${id}`);

        alert("Produto excluído com sucesso!");

        navigate("/produtos");
      } catch (error) {
        console.error(error);

        alert("Erro ao excluir o produto.");
      }
    }

    return (
      <main className="grow w-full max-w-xl mx-auto px-4 md:px-8 py-24 md:py-28 flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-3 bg-white border border-slate-200 rounded-lg p-8">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-50 text-red-600">
            <WarningCircleIcon size={32} />
          </div>

          <h1 className="text-2xl font-semibold text-slate-800">
            Excluir Produto
          </h1>

          <p className="text-base text-slate-600">
            Tem certeza que deseja excluir o produto{" "}
            <span className="font-semibold text-slate-800">
              {produto.nome}
            </span>
            ?
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={deletarProduto}
              className="bg-green-600 text-white text-base px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium"
            >
              Sim
            </button>

            <Link
              to="/produtos"
              className="bg-red-600 text-white text-base px-6 py-3 rounded-lg border border-slate-300 hover:bg-red-700 transition-colors font-medium"
            >
              Não
            </Link>
          </div>
        </div>
      </main>
    );
  }

  export default DeletarProduto;