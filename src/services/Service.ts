import axios from "axios";

const api = axios.create({
  baseURL: "https://farmacia-jk1x.onrender.com/",
});

// Função para consultar dados
export const buscar = async (
  url: string,
  setDados: Function
) => {
  const resposta = await api.get(url);

  setDados(resposta.data);
};

// Função para cadastrar dados
export const cadastrar = async (
  url: string,
  dados: Object,
  setDados: Function
) => {
  const resposta = await api.post(url, dados);

  setDados(resposta.data);
};

// Função para atualizar dados
export const atualizar = async (
  url: string,
  dados: Object,
  setDados: Function
) => {
  const resposta = await api.put(url, dados);

  setDados(resposta.data);
};

// Função para deletar dados
export const deletar = async (url: string) => {
  await api.delete(url);
};