<div align="center">

# 💊 Farmácia JRF

### Uma aplicação de gerenciamento de categorias e produtos para farmácia, desenvolvida com React, TypeScript e Vite.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/Licença-Educacional-8B5CF6?style=for-the-badge)](#)

<br />

[Funcionalidades](#-funcionalidades)
&nbsp;•&nbsp;
[Tecnologias](#-tecnologias)
&nbsp;•&nbsp;
[Como executar](#-como-executar)
&nbsp;•&nbsp;
[Estrutura](#-estrutura-do-projeto)
&nbsp;•&nbsp;
[API](#-comunicação-com-a-api)
&nbsp;•&nbsp;
[Rotas](#-rotas-da-aplicação)
&nbsp;•&nbsp;
[Autor](#-autor)

</div>

---

## ✨ Sobre o projeto

A **Farmácia JRF** é uma aplicação frontend para gerenciamento de categorias e produtos de uma farmácia. A interface permite consultar, cadastrar, editar e excluir categorias e produtos por meio de uma API REST publicada.

O projeto foi desenvolvido para praticar conceitos fundamentais do ecossistema React, como componentização, tipagem estática com TypeScript, rotas com React Router DOM, consumo de API com Axios, operações CRUD, formulários, relacionamento entre Produto e Categoria e estilização responsiva com Tailwind CSS.

> 💡 Projeto criado para fins de estudo, prática e composição de portfólio em Desenvolvimento Full Stack Java.

---

## 🚀 Funcionalidades

### 🏠 Navegação e páginas

- Página inicial com apresentação da Farmácia JRF
- Exibição de produtos cadastrados na página inicial
- Página Sobre Nós
- Navegação entre páginas com React Router DOM
- Navbar responsiva com menu para telas menores
- Footer com informações e contato da farmácia

### 🏷️ Gerenciamento de categorias

- Listagem de todas as categorias cadastradas
- Cadastro de categoria
- Edição de categoria
- Exclusão de categoria com confirmação
- Cards de categoria estilizados
- Mensagens de sucesso e erro nas operações

### 💊 Gerenciamento de produtos

- Listagem de todos os produtos cadastrados
- Cadastro de produto
- Edição de produto
- Exclusão de produto com confirmação
- Associação de produto a uma categoria
- Exibição de nome, foto, preço e categoria do produto
- Formatação de preço em reais
- Imagem alternativa caso a URL da foto falhe

### 🎨 Experiência do usuário

- Interface responsiva estilizada com Tailwind CSS
- Layout construído com Flexbox e Grid Layout
- Cards reutilizáveis
- Ícones da biblioteca Phosphor Icons
- Loaders de carregamento com React Spinners
- Formatação de valores monetários com React Number Format
- Tratamento básico de erros de comunicação com a API

---

## 🛠 Tecnologias

<div align="center">

| Tecnologia | Utilização |
| :--- | :--- |
| [React](https://react.dev/) | Criação de interfaces baseadas em componentes |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática e organização dos modelos |
| [Vite](https://vite.dev/) | Ambiente de desenvolvimento e geração do build |
| [React Router DOM](https://reactrouter.com/) | Gerenciamento de rotas e navegação entre páginas |
| [Axios](https://axios-http.com/) | Requisições HTTP para a API REST |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização responsiva da interface |
| [React Spinners](https://www.davidhu.io/react-spinners/) | Indicadores de carregamento durante requisições |
| [Phosphor Icons](https://phosphoricons.com/) | Biblioteca de ícones |
| [React Number Format](https://s-yadav.github.io/react-number-format/) | Formatação do campo de preço em reais |
| [ESLint](https://eslint.org/) | Padronização e análise de qualidade do código |

</div>

---

## 📁 Estrutura do projeto

```text
src/
│
├── assets/                         # Imagens e arquivos estáticos
│
├── components/                     # Componentes reutilizáveis
│   │
│   ├── card/
│   │   └── Card.tsx                # Card genérico para a aplicação
│   │
│   ├── categoria/                  # Componentes do CRUD de categorias
│   │   ├── cardcategoria/
│   │   │   └── CardCategoria.tsx
│   │   ├── deletarcategoria/
│   │   │   └── DeletarCategoria.tsx
│   │   ├── formcategoria/
│   │   │   └── FormCategoria.tsx
│   │   └── listacategoria/
│   │       └── ListaCategorias.tsx
│   │
│   ├── footer/
│   │   └── Footer.tsx              # Rodapé da aplicação
│   │
│   ├── navbar/
│   │   └── Navbar.tsx              # Barra de navegação responsiva
│   │
│   └── produto/                    # Componentes do CRUD de produtos
│       ├── cardproduto/
│       │   └── CardProduto.tsx
│       ├── deletarproduto/
│       │   └── DeletarProduto.tsx
│       ├── formproduto/
│       │   └── FormProduto.tsx
│       └── listaproduto/
│           └── ListaProdutos.tsx
│
├── models/                         # Interfaces e tipagens TypeScript
│   ├── Categoria.ts
│   └── Produto.ts
│
├── pages/                          # Páginas da aplicação
│   ├── about/
│   │   └── about.tsx               # Página Sobre Nós
│   └── home/
│       └── Home.tsx                # Página inicial
│
├── services/
│   └── Service.ts                  # Comunicação com a API REST
│
├── App.css                         # Estilos específicos da aplicação
├── App.tsx                         # Estrutura principal e rotas
├── index.css                       # Estilos globais e Tailwind CSS
└── main.tsx                        # Ponto de entrada da aplicação
```

### Arquivos de configuração

```text
.gitignore                          # Arquivos ignorados pelo Git
eslint.config.js                    # Configuração do ESLint
index.html                          # Documento HTML principal
package.json                        # Dependências e scripts do projeto
package-lock.json                   # Versões travadas das dependências
tsconfig.app.json                   # Configuração TypeScript da aplicação
tsconfig.json                       # Configuração TypeScript geral
tsconfig.node.json                  # Configuração TypeScript para Node
vercel.json                         # Configuração de deploy na Vercel
vite.config.ts                      # Configuração do Vite
```

---

## ⚙️ Como executar

### Pré-requisitos

Antes de executar o projeto, instale:

- [Node.js](https://nodejs.org/)
- npm
- Git

Verifique a instalação:

```bash
node --version
npm --version
```

### 1. Clone o repositório

```bash
git clone https://github.com/JoelRamalhoF/projeto_final_bloco_03.git
```

### 2. Acesse a pasta do projeto

```bash
cd projeto_final_bloco_03
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute em desenvolvimento

```bash
npm run dev
```

Depois, abra a URL exibida pelo Vite no terminal. Normalmente:

```text
http://localhost:5173
```

---

## 📦 Scripts disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local para desenvolvimento |
| `npm run build` | Gera a versão otimizada da aplicação para produção |
| `npm run preview` | Executa uma prévia local do build gerado |
| `npm run lint` | Verifica o código com ESLint |

### Build de produção

Para gerar os arquivos de produção:

```bash
npm run build
```

Os arquivos otimizados são criados em:

```text
dist/
```

Para testar o build localmente:

```bash
npm run preview
```

---

## 🔌 Comunicação com a API

As chamadas para a API REST são centralizadas no diretório:

```text
src/services/
```

A aplicação utiliza Axios para enviar e receber dados do backend da Farmácia.

### Base URL

```text
https://farmacia-jk1x.onrender.com/
```

### Endpoints utilizados

| Método HTTP | Endpoint | Finalidade |
| :--- | :--- | :--- |
| `GET` | `/categorias` | Lista todas as categorias |
| `GET` | `/categorias/:id` | Busca uma categoria pelo identificador |
| `POST` | `/categorias` | Cadastra uma categoria |
| `PUT` | `/categorias` | Atualiza uma categoria |
| `DELETE` | `/categorias/:id` | Exclui uma categoria |
| `GET` | `/produtos` | Lista todos os produtos |
| `GET` | `/produtos/:id` | Busca um produto pelo identificador |
| `POST` | `/produtos` | Cadastra um produto |
| `PUT` | `/produtos` | Atualiza um produto |
| `DELETE` | `/produtos/:id` | Exclui um produto |

### Estrutura dos dados

Uma categoria segue este formato:

```json
{
  "id": 1,
  "nome": "Medicamentos"
}
```

Um produto segue este formato:

```json
{
  "id": 1,
  "nome": "Dipirona",
  "preco": 12.5,
  "foto": "https://exemplo.com/imagem.jpg",
  "categoria": {
    "id": 1,
    "nome": "Medicamentos"
  }
}
```

---

## 🧭 Rotas da aplicação

| Rota | Página/Função |
| :--- | :--- |
| `/` | Página inicial |
| `/home` | Página inicial |
| `/sobre` | Página Sobre Nós |
| `/categorias` | Listagem de categorias |
| `/cadastrarcategoria` | Cadastro de categoria |
| `/editarcategoria/:id` | Edição de categoria |
| `/deletarcategoria/:id` | Exclusão de categoria |
| `/produtos` | Listagem de produtos |
| `/cadastrarproduto` | Cadastro de produto |
| `/editarproduto/:id` | Edição de produto |
| `/deletarproduto/:id` | Exclusão de produto |

---

## 🔔 Feedback visual

A aplicação utiliza mensagens de alerta para informar o resultado das operações CRUD e loaders durante algumas requisições assíncronas.

Exemplos de feedback:

```text
✓ Categoria cadastrada com sucesso!
✓ Categoria atualizada com sucesso!
✓ Categoria deletada com sucesso!
✓ Produto cadastrado com sucesso!
✓ Produto atualizado com sucesso!
✓ Produto excluído com sucesso!
✕ Erro ao consultar dados da API
✕ Erro ao cadastrar ou atualizar dados
```

---

## 🗺️ Próximas melhorias

- [ ] Adicionar busca de produtos por nome
- [ ] Criar filtros de produtos por categoria
- [ ] Implementar paginação para listagens maiores
- [ ] Adicionar loaders em todas as páginas de listagem e formulários
- [ ] Melhorar o tratamento de erros da API
- [ ] Adicionar validações mais detalhadas nos formulários
- [ ] Criar uma página de detalhes do produto
- [ ] Adicionar imagens próprias para produtos sem foto
- [ ] Implementar autenticação de usuários em uma etapa futura
- [ ] Adicionar testes unitários e de integração
- [ ] Publicar o frontend em uma plataforma de deploy

---

## 👨‍💻 Autor

<div align="center">

Desenvolvido por **Joel Ramalho Filho**.

[![GitHub](https://img.shields.io/badge/GitHub-JoelRamalhoF-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JoelRamalhoF)

[![Repositório](https://img.shields.io/badge/Repositório-projeto__final__bloco__03-6366F1?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JoelRamalhoF/projeto_final_bloco_03)

<br />

Feito com 💙 usando React, TypeScript e Vite.

</div>

---

<div align="center">

## 🌐 Deploy

Acesse a aplicação publicada na Vercel:

[![Acessar Projeto](https://img.shields.io/badge/Acessar%20Projeto-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://projetofinalbloco03-alpha.vercel.app/)

🔗 **[Projeto Final Bloco 03](https://projetofinalbloco03-alpha.vercel.app/)**

</div>

---

<div align="center">

Projeto desenvolvido para fins educacionais e de portfólio.

</div>
