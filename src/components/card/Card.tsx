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
    <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-all hover:shadow-lg">
      <div className="flex h-48 w-full items-center justify-center overflow-hidden bg-slate-100">
        {imageUrl ? (
          <Link to={rota} className="h-full w-full cursor-pointer">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover"
            />
          </Link>
        ) : (
          <ImageIcon
            size={48}
            weight="light"
            className="text-slate-400"
          />
        )}
      </div>

      <div className="flex flex-col gap-2 p-6">
        <div className="flex items-center gap-2">
          <span className="text-blue-700">{icon}</span>

          <h3 className="text-xl font-semibold text-slate-800">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}