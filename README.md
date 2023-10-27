# Cake n' View web
O projeto Cake n' View é uma aplicação destinada a **avaliar alguns tipos de bolos** e ajudar pessoas a **descobrirem novas variedades**.

Este repositório possui o código relacionado à interface web. Caso deseje conhecer mais sobre a API consumida, você pode conferir [nesse repositório](https://github.com/duducharapa/cake-n-view-api).

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Algumas imagens do projeto](#algumas-imagens-do-projeto)
- [Considerações](#considerações)

<br>

## Tecnologias utilizadas
A principal biblioteca utilizada é **React**, juntamente com a linguagem **Typescript**.

A aplicação não utiliza uma biblioteca padrão de UI, mas utiliza algumas bibliotecas para ajudar no desenvolvimento, sendo algumas elas:
- [Tailwind CSS](https://tailwindcss.com/) para estilizações mais simples
- [Framer Motion](https://www.framer.com/motion/) para criar animações
- [Axios](https://axios-http.com/) para requisitar dados da API

<br>

## Instalação
O projeto possui integração com o **Docker Compose**. Para executar o ambiente, basta executar esse comando na raiz do diretório.

> docker-compose up -d

E assim, basta acessar no seu navegador http://localhost:5173 e o projeto estará executando.

### Observação
A API que a aplicação consome demora alguns segundos a iniciar.

### Sem Docker Compose?
Caso não possui o Docker Compose instalado, será necessário ter, pelo menos, uma versão do **Node** instalada e um gerenciador como o **npm ou yarn**.

<br>

## Algumas imagens do projeto

### Landing page
![Tela inicial](https://github.com/duducharapa/cake-n-view-web/assets/47173483/3471c63a-858e-429a-9518-2b6bd26d37f6)

![Bolo do dia](https://github.com/duducharapa/cake-n-view-web/assets/47173483/3a682985-c491-40b2-b573-14d1a8b89a0c)

### Busca
![Listagem de bolos](https://github.com/duducharapa/cake-n-view-web/assets/47173483/9d8c32d1-74f8-4506-85ec-ee3b88a4bd30)

### Detalhes do bolo e avaliações
![Detalhes do bolo](https://github.com/duducharapa/cake-n-view-web/assets/47173483/e653928c-2512-4c73-82a4-71ce40c680c6)

![Avaliações do bolo](https://github.com/duducharapa/cake-n-view-web/assets/47173483/8d3bebad-27a6-4a27-ae73-82956ff453e3)

<br>

## Considerações
- Apesar de não ser recomendado expor arquivos de ambiente, o arquivo ```.env``` foi adicionado **por questões de praticidade**, tendo em
vista que é um projeto pessoal e de portifólio.
- Mesmo sendo **mais prático utilizar algumas biblioteca de UI** como o [MUI](https://mui.com/) e o [Chakra UI](https://chakra-ui.com/), optei por **não utilizar** para aprender mais sobre algumas bibliotecas de animações e estilização, como também cada vez mais sobre React e Typescript.
