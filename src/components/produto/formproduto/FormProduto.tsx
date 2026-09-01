import { useEffect, useState, type SyntheticEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { NumericFormat } from "react-number-format";

function FormProduto() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: 0,
    foto: "",
    categoria: null,
  });

  useEffect(() => {
    buscarCategorias();
  }, []);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  }

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, (produtoRecebido: Produto) => {
        setProduto(produtoRecebido);

        if (produtoRecebido.categoria !== null) {
          setCategoria(produtoRecebido.categoria);
        }
      });
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  }

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function atualizarEstadoNumero(
    name: string,
    value: number | undefined
  ) {
    setProduto({
      ...produto,
      [name]: value ?? 0,
      categoria: categoria,
    });
  }

  function atualizarCategoria(e: React.ChangeEvent<HTMLSelectElement>) {
    const categoriaSelecionada = categorias.find(
      (categoria) => categoria.id === Number(e.target.value)
    );

    if (categoriaSelecionada !== undefined) {
      setCategoria(categoriaSelecionada);

      setProduto({
        ...produto,
        categoria: categoriaSelecionada,
      });
    }
  }

  async function gerarNovoProduto(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const produtoComCategoria = {
      id: id !== undefined ? Number(id) : 0,
      nome: produto.nome,
      preco: produto.preco,
      foto: produto.foto,
      categoria: {
        id: categoria.id,
        nome: categoria.nome,
      },
    };

    console.log("Produto enviado para a API:", produtoComCategoria);

    if (id !== undefined) {
      try {
        await atualizar(
          "/produtos",
          produtoComCategoria,
          setProduto
        );

        alert("Produto atualizado com sucesso!");
      } catch (error: any) {
        console.error("Erro completo ao atualizar:", error);

        if (error.response) {
          alert(
            `Erro ${error.response.status}: ${JSON.stringify(
              error.response.data
            )}`
          );
        } else {
          alert("Erro ao atualizar. Verifique o Console do navegador.");
        }

        return;
      }
    } else {
      try {
        await cadastrar(
          "/produtos",
          produtoComCategoria,
          setProduto
        );

        alert("Produto cadastrado com sucesso!");
      } catch (error: any) {
        console.error("Erro completo ao cadastrar:", error);

        if (error.response) {
          alert(
            `Erro ${error.response.status}: ${JSON.stringify(
              error.response.data
            )}`
          );
        } else {
          alert("Erro ao cadastrar. Verifique o Console do navegador.");
        }

        return;
      }
    }

    navigate("/produtos");
  }

  return (
    <main className="grow w-full max-w-2xl mx-auto px-4 md:px-8 py-24 md:py-28">
      <form
        className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 flex flex-col gap-6"
        onSubmit={gerarNovoProduto}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">
            {id === undefined ? "Cadastrar Produto" : "Editar Produto"}
          </h1>

          <p className="text-sm text-slate-500">
            Preencha os dados abaixo para cadastrar ou editar um produto.
          </p>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="nome"
            className="text-sm font-medium text-slate-700"
          >
            Nome
          </label>

          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite o nome do produto"
            className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={produto.nome}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="foto"
            className="text-sm font-medium text-slate-700"
          >
            URL da imagem
          </label>

          <input
            type="url"
            id="foto"
            name="foto"
            placeholder="Cole a URL da imagem do produto"
            className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={produto.foto}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="preco"
            className="text-sm font-medium text-slate-700"
          >
            Preço (R$)
          </label>

          <NumericFormat
            id="preco"
            name="preco"
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale
            allowNegative={false}
            prefix="R$ "
            className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="R$ 0,00"
            value={produto.preco}
            onValueChange={(values) =>
              atualizarEstadoNumero("preco", values.floatValue)
            }
            required
          />
        </div>

        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="categoria"
            className="text-sm font-medium text-slate-700"
          >
            Categoria
          </label>

          <select
            name="categoria"
            id="categoria"
            className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            onChange={atualizarCategoria}
            value={produto.categoria?.id ?? 0}
            required
          >
            <option value="0" disabled>
              Selecione uma categoria
            </option>

            {categorias.map((categoria) => (
              <option value={categoria.id} key={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <Link
            to="/produtos"
            className="bg-red-600 text-white text-base px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Cancelar
          </Link>

          <button
            type="submit"
            className="bg-blue-600 text-white text-base px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {id === undefined ? "Cadastrar" : "Atualizar"}
          </button>
        </div>
      </form>
    </main>
  );
}

export default FormProduto;