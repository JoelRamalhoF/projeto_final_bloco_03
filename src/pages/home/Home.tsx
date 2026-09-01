import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProduto from "../../components/produto/cardproduto/CardProduto";
import type Produto from "../../models/Produto";
import { buscar } from "../../services/Service";

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(`Erro ao consultar os produtos: ${error.response?.status}`);
      } else {
        alert("Erro ao consultar os produtos.");
      }
    }
  }

  return (
    <>
      <section className="flex min-h-[560px] items-center bg-cyan-100 px-4 pb-10 pt-28 sm:px-8 md:min-h-[520px] md:py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-around gap-8 md:flex-row md:gap-10">
          <div className="flex w-full flex-col items-center gap-4 text-center md:items-start md:text-left">
            <h1 className="text-4xl font-bold text-[#172B4D] sm:text-5xl">
              Seja bem vinde!
            </h1>

            <p className="max-w-md text-lg text-black sm:text-xl">
              Aqui você encontra Medicamentos e Cosméticos!
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link
                to="/cadastrarproduto"
                className="w-full rounded bg-indigo-700 px-8 py-3 text-center text-white hover:bg-indigo-800 sm:w-auto"
              >
                Cadastrar Produto
              </Link>

              <Link
                to="/sobre"
                className="w-full rounded border border-indigo-700 px-8 py-3 text-center text-indigo-700 hover:bg-indigo-100 sm:w-auto"
              >
                Sobre Nós
              </Link>
            </div>
          </div>

          <img
            src="https://ik.imagekit.io/5eywr3ioq/FARMACIA%20PG/home.png"
            alt="Ilustração de uma farmacêutica no balcão"
            className="w-64 sm:w-80 md:w-96"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-8 md:py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
          <h2 className="text-center text-2xl font-semibold text-slate-800 sm:text-3xl">
            Nossos Produtos
          </h2>

          {produtos.length === 0 ? (
            <p className="py-12 text-center text-slate-500">
              Nenhum produto cadastrado.
            </p>
          ) : (
            <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {produtos.map((produto) => (
                <CardProduto
                  key={produto.id}
                  produto={produto}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}