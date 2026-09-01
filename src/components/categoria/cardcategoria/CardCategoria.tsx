import { Link } from "react-router-dom";
import {
  PillIcon,
  PencilSimpleIcon,
  TrashSimpleIcon,
} from "@phosphor-icons/react";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/55 shadow-[0_18px_50px_rgba(37,99,235,0.12)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(37,99,235,0.20)]">
      <div className="h-1.5 w-full bg-gradient-to-r from-[#1689F5] to-[#2563EB]" />

      <div className="relative flex flex-col gap-3 p-6">
        <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#60A5FA]/15 blur-2xl" />

        <div className="pointer-events-none absolute -bottom-16 -left-12 h-28 w-28 rounded-full bg-[#A78BFA]/15 blur-2xl" />

        <div className="relative z-10 flex flex-row items-center gap-3 border-b border-white/70 pb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4FF]/75 text-[#1864A8]">
            <PillIcon size={24} />
          </div>

          <div>
            <span className="inline-flex rounded-full border border-[#1689F5]/15 bg-[#EAF4FF]/75 px-3 py-1 text-xs font-semibold text-[#1864A8]">
              Categoria
            </span>
          </div>
        </div>

        <h3 className="relative z-10 text-xl font-bold text-[#172B4D]">
          {categoria.nome}
        </h3>

        <div className="relative z-10 mt-2 flex items-center gap-2 border-t border-white/70 pt-4">
          <Link
            to={`/editarcategoria/${categoria.id}`}
            className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-[#1689F5] to-[#2563EB] py-2 text-sm font-medium text-white shadow-[0_8px_20px_rgba(37,99,235,0.28)] transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <PencilSimpleIcon size={18} />
            Editar
          </Link>

          <Link
            to={`/deletarcategoria/${categoria.id}`}
            className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-rose-500/20 bg-rose-500 py-2 text-sm font-medium text-white shadow-[0_8px_20px_rgba(225,29,72,0.20)] transition-all hover:-translate-y-0.5 hover:bg-rose-600"
          >
            <TrashSimpleIcon size={18} />
            Excluir
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CardCategoria;