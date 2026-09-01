import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState<boolean>(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full overflow-hidden border-b border-white/70 bg-[#DDEEFF]/65 shadow-[0_10px_35px_rgba(21,93,173,0.16)] backdrop-blur-2xl">
      <div className="pointer-events-none absolute -left-20 -top-20 h-36 w-36 rounded-full bg-[#1689F5]/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-16 -top-20 h-36 w-36 rounded-full bg-[#7C3AED]/25 blur-3xl" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1689F5]/70 to-[#7C3AED]/60" />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link
          to="/home"
          className="flex items-center transition-transform active:scale-95"
          onClick={() => setMenuAberto(false)}
        >
          <img
            src="https://ik.imagekit.io/5eywr3ioq/FARMACIA%20PG/favicon.png"
            alt="Logo da Farmácia JRF"
            className="mr-2 h-10 w-10 rounded-full border border-[#2563EB]/50 bg-white/20 p-1 shadow-md backdrop-blur-sm"
          />

          <span className="bg-gradient-to-r from-[#1689F5] via-[#2563EB] to-[#7C3AED] bg-clip-text text-2xl font-black tracking-tight text-transparent drop-shadow-sm">
            Farmácia
            <span className="text-[#172B4D]">JRF</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-2xl border border-white/70 bg-white/35 p-1 text-sm font-semibold text-[#274A73] shadow-sm backdrop-blur-md md:flex">
          <Link
            to="/home"
            className="relative rounded-xl px-4 py-2 transition-all hover:bg-white/65 hover:text-[#2563EB]"
          >
            Home
          </Link>

          <Link
            to="/categorias"
            className="relative rounded-xl px-4 py-2 transition-all hover:bg-white/65 hover:text-[#2563EB]"
          >
            Categorias
          </Link>

          <Link
            to="/produtos"
            className="relative rounded-xl px-4 py-2 transition-all hover:bg-white/65 hover:text-[#2563EB]"
          >
            Produtos
          </Link>

          <Link
            to="/sobre"
            className="relative rounded-xl px-4 py-2 transition-all hover:bg-white/65 hover:text-[#2563EB]"
          >
            Sobre Nós
          </Link>
        </div>

        <button
          className="rounded-xl border border-white/80 bg-white/45 p-2 text-[#172B4D] shadow-md backdrop-blur-md transition-all hover:scale-105 hover:border-[#1689F5]/35 hover:bg-white/75 active:scale-95 md:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          {menuAberto ? (
            <X size={26} weight="bold" className="text-[#2563EB]" />
          ) : (
            <List size={26} weight="bold" />
          )}
        </button>
      </nav>

      {menuAberto && (
        <div className="relative flex flex-col gap-2 border-t border-white/70 bg-[#EAF4FF]/75 px-6 py-5 text-base font-semibold text-[#172B4D] shadow-xl backdrop-blur-2xl md:hidden">
          <Link
            to="/home"
            className="rounded-xl px-4 py-3 transition-all hover:bg-white/75 hover:text-[#2563EB]"
            onClick={() => setMenuAberto(false)}
          >
            Home
          </Link>

          <Link
            to="/categorias"
            className="rounded-xl px-4 py-3 transition-all hover:bg-white/75 hover:text-[#2563EB]"
            onClick={() => setMenuAberto(false)}
          >
            Categorias
          </Link>

          <Link
            to="/produtos"
            className="rounded-xl px-4 py-3 transition-all hover:bg-white/75 hover:text-[#2563EB]"
            onClick={() => setMenuAberto(false)}
          >
            Produtos
          </Link>

          <Link
            to="/sobre"
            className="rounded-xl px-4 py-3 transition-all hover:bg-white/75 hover:text-[#2563EB]"
            onClick={() => setMenuAberto(false)}
          >
            Sobre Nós
          </Link>
        </div>
      )}
    </header>
  );
}