import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <main className="grow bg-cyan-100 px-8 py-24 md:py-32">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 rounded-lg bg-white p-8 text-center shadow-md md:p-12">
        <h1 className="text-4xl font-bold text-slate-800">
          Sobre Nós
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          A Farmácia JRF oferece medicamentos e cosméticos com qualidade,
          confiança e praticidade para seus clientes.
        </p>

        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          Nosso objetivo é facilitar o acesso aos produtos de saúde e beleza,
          proporcionando um atendimento simples e uma experiência segura.
        </p>

        <Link
          to="/home"
          className="rounded bg-indigo-700 px-8 py-3 text-white hover:bg-indigo-800"
        >
          Voltar para Home
        </Link>
      </section>
    </main>
  );
}