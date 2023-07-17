# Boas vindas ao projeto News-Project

## Publicação

O projeto não foi publicado pois a API utilizada permite apenas a sua utilização em ambiente de desenvolvimento. Utilizá-la em ambiente de produção necessita uma chave de acesso paga.

## Tecnologias utilizadas

Projeto implementado com TypeScript e React utilizando o framework Next.js. Para estilização, foi utilizado CSS Modules.

## Funcionalidades

O projeto realiza uma requisição para a API [news-api](https://newsapi.org/). A API retorna uma lista de notícias, que são exibidas na tela inicial do projeto. A primeira busca, ao renderizar a página, apresenta as notícias mais recentes sobre "_Web Development_".

A página irá renderizar as primeiras 5 notícias. Para mostrar mais, basta clicar no botão ao fim da página.

Cada notícia irá mostrar o título, o autor, a data de publicação e uma prévia. Além disso, um _link_ direcionando para a página onde a notícia foi publicada.

![Gif inicial](/public/inicio.gif)

O usuário pode inserir na barra de pesquisa, que fica no cabeçalho da página, algum termo de busca que desejar. Após clicar no botão "Pesquisar", a página irá mostrar as notícias que correspondem ao termo de busca.

![Gif busca](/public/search.gif)

## Executando o projeto

Para executar o projeto na sua máquina, faça um clone do repositório:

```bash
git clone git@github.com:felipemuller20/news-search.git
```

Após entrar no diretório criado, instale as dependências do projeto:

```bash
npm install
```

Para realizar uma requisição à API, é necessária uma chave de acesso. Basta acessar [esse link](https://newsapi.org/) e solicitar uma chave.

Na raiz do projeto, crie um arquivo `.env.local` e adicione a chave da seguinte maneira, substituindo o valor abaixo pela chave gerada para você.

```bash
NEXT_PUBLIC_API_KEY=e5a075468f5f41cc8f7d098b8ffb101c
```

Após, basta executar o projeto utilizando o comando:

```bash
npm run dev
```

E acessar a [página local](http://localhost:3000) gerada.
