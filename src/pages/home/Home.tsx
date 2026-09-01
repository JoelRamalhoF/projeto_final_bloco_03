import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex min-h-[600px] items-center bg-cyan-100 px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-around gap-10 md:flex-row">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <h1 className="text-5xl font-bold text-black">
            Seja bem vindo!
          </h1>

          <p className="text-xl text-black">
            Aqui você encontra Medicamentos e Cosméticos!
          </p>

          <Link
            to="/cadastrarproduto"
            className="rounded bg-indigo-700 px-8 py-3 text-white hover:bg-indigo-800"
          >
            Cadastrar Produto
          </Link>
        </div>

        <img
          src="https://ik.imagekit.io/5eywr3ioq/FARMACIA%20PG/home.png"
          alt="Ilustração de uma farmacêutica no balcão"
          className="w-80 md:w-96"
        />
      </div>
    </section>
  );
}