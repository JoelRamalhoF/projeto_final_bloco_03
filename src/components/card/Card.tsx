import { ImageIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface CardProps {
  icon: ReactNode;
  title: string;
  imageUrl?: string;
  rota: string;
}

export default function Card({
  icon,
  title,
  imageUrl,
  rota,
}: CardProps) {
  return (
    <article className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/55 shadow-[0_18px_50px_rgba(37,99,235,0.12)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(37,99,235,0.20)]">
      <div className="h-1.5 w-full bg-gradient-to-r from-[#1689F5] to-[#2563EB]" />

      <div className="relative flex flex-col">
        <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#60A5FA]/15 blur-2xl" />

        <div className="pointer-events-none absolute -bottom-16 -left-12 h-28 w-28 rounded-full bg-[#A78BFA]/15 blur-2xl" />

        <div className="relative z-10 flex h-48 w-full items-center justify-center overflow-hidden bg-[#EAF4FF]/60">
          {imageUrl ? (
            <Link to={rota} className="h-full w-full cursor-pointer">
              <img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-cover transition duration-200 hover:scale-105"
              />
            </Link>
          ) : (
            <ImageIcon
              size={48}
              weight="light"
              className="text-[#6B82A3]"
            />
          )}
        </div>

        <div className="relative z-10 flex flex-col gap-3 p-6">
          <div className="flex items-center gap-2">
            <span className="text-[#1864A8]">{icon}</span>

            <h3 className="text-xl font-bold text-[#172B4D]">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </article>
  );
}