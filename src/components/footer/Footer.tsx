import { Envelope } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-[#4B8ED7]/35 bg-[#102A4C] text-[#D8E9FF]">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#1689F5]/25 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#7C3AED]/25 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/15 blur-3xl" />

      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#48A9FF] to-[#A78BFA]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-9 md:flex-row md:px-12">
        <div className="flex max-w-lg flex-col items-center gap-1.5 text-center md:items-start md:text-left">
          <Link to="/" className="group text-xl font-black tracking-tight">
            <img
              src="https://ik.imagekit.io/5eywr3ioq/FARMACIA%20PG/favicon.png"
              alt="Logo da Farmácia JRF"
              className="mr-2 h-10 w-10 rounded-full border border-[#2563EB]/50 bg-white/20 p-1 shadow-md backdrop-blur-sm"
            />
            <span className="bg-gradient-to-r from-[#74C2FF] via-[#48A9FF] to-[#B69CFF] bg-clip-text text-transparent transition-all group-hover:brightness-125">
              Farmácia
            </span>

            <span className="text-white">JRF</span>
          </Link>

          <p className="text-xs font-light italic leading-relaxed text-[#BAD2EF]">
            “Os melhores descontos estão aqui.”
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-3 text-xs md:items-end">
          <a
            href="mailto:suporte@conectacrm.com"
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-[#E9F3FF] shadow-lg backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[#74C2FF]/60 hover:bg-white/20"
          >
            <Envelope size={16} className="text-[#74C2FF]" />

            <span className="font-medium">suporte@farmaciajrf.com</span>
          </a>

          <p className="text-[11px] text-[#8EACD1]">
            © 2026{' '}
            <span className="font-medium text-[#D8E9FF]">
              Joel Ramalho Filho
            </span>
            . Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}