import { PencilSimpleIcon, TrashSimpleIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const precoFormatado = Number(produto.preco).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const imagemPadrao =
    "https://ik.imagekit.io/5eywr3ioq/FARMACIA%20PG/home.png";

  return (
    <article className="relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/55 shadow-[0_18px_50px_rgba(37,99,235,0.12)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(37,99,235,0.20)] md:max-w-64">
      <div className="h-1.5 w-full bg-gradient-to-r from-[#1689F5] to-[#2563EB]" />

      <div className="relative">
        <div className="pointer-events-none absolute -right-12 -top-12 z-10 h-28 w-28 rounded-full bg-[#60A5FA]/15 blur-2xl" />

        <div className="pointer-events-none absolute -bottom-16 -left-12 z-10 h-28 w-28 rounded-full bg-[#A78BFA]/15 blur-2xl" />

        <div className="relative h-60 w-full overflow-hidden bg-[#EAF4FF]/60">
          <img
            src={produto.foto || imagemPadrao}
            alt={`Imagem do produto ${produto.nome}`}
            className="h-full w-full object-cover transition duration-200 hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = imagemPadrao;
            }}
          />
        </div>

        <div className="relative z-20 flex flex-col gap-3 p-5">
          <span className="w-fit rounded-full border border-[#1689F5]/15 bg-[#EAF4FF]/75 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1864A8]">
            {produto.categoria?.nome ?? "Sem categoria"}
          </span>

          <h3 className="line-clamp-2 text-xl font-bold text-[#172B4D]">
            {produto.nome}
          </h3>

          <p className="text-lg font-semibold text-[#30476A]">
            {precoFormatado}
          </p>

          <div className="mt-1 flex items-center gap-2 border-t border-white/70 pt-4">
            <Link
              to={`/editarproduto/${produto.id}`}
              className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-[#1689F5] to-[#2563EB] py-2 text-sm font-medium text-white shadow-[0_8px_20px_rgba(37,99,235,0.28)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <PencilSimpleIcon size={18} />
              Editar
            </Link>

            <Link
              to={`/deletarproduto/${produto.id}`}
              className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-rose-500/20 bg-rose-500 py-2 text-sm font-medium text-white shadow-[0_8px_20px_rgba(225,29,72,0.20)] transition-all hover:-translate-y-0.5 hover:bg-rose-600"
            >
              <TrashSimpleIcon size={18} />
              Excluir
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CardProduto;