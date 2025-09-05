<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Arquivos e Complementos do projeto

- [PostgreeSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- [Database.sql](https://github.com/MdevSs/flowfeed-backend/raw/main/download/download.zip)


## Setup

<p align="left">1. Ao baixar o projeto, rode o comando abaixo para baixar as dependências, e depois conseguir rodar a aplicação</p>

```bash
$ npm install
```

<br>
 
<p align="left">2. Rode o Banco de Dados com Docker (Necessário ter o docker instalado)</p>
<p align="left" style="color: gray;">no Windows é necessário estar com o Docker Desktop aberto/segundo plano</p>


```bash
# na raiz do projeto rode o comando abaixo
$ docker compose up
```

<br>
 

<p align="left">3. Rode o comando para alterar o banco de dados, banco este que está executando no Docker, ao digitar esse comando adicionamos as tabelas configuradas pelo Prisma a ele</p>

```bash
$ npx prisma db push
```

<br>

<p align="left">4. Rode esse comando para gerar as tipagens das tabelas do banco de dados configurado pelo Prisma</p>

```bash
$ npx prisma generate
```

<br>

__(SUGESTÃO)__ 5. Por fim, caso queira adicionar registros as tabelas de forma simples e fácil, recomendo baixar a Extensão `REST Client` do VS Code e fazer as requisições pelo arquivo `requisicoes.http` que está na raiz do projeto, basta abrir o arquivo, alterá-lo se for necessário e apertar em __Send Request__ para fazer a requisição

Exemplo de requisição no arquivo
```bash
# caminho da requisição para acessar os endpoints/controllers
POST http://localhost:3001/api/users/create
Content-Type: application/json

# dados que vão ser enviado no corpo/Body da requisição
{
  "name": "admin",
  "email": "seuemail@gmail.com",
  "password_hash": "123"
}
```

<br>
 
## Compilar e rodar projeto

```bash
# rodar o projeto (sem watch mode, não atualiza a aplicação quando há alterações no código)
$ npm run start

# roda o projeto (com watch mode, atualiza a aplicação caso altere o código e salve)
$ npm run dev

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

