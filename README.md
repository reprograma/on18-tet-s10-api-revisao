<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Revisao API

Turma Online On18 - Todas em Tech | back-end | Semana 10 | 2022 | Professora Beatriz Ramerindo

### Instruções

Antes de começar, vamos organizar nosso setup. * Fork esse repositório * Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`) * Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Resumo

O que veremos na aula de hoje?

* [NodeJS](#node-js)
* [HTTP](#http-1)
* [API (Application Programming Interface)](#api-application-programming-interface-1)
* [Arquitetura MVC](#arquitetura-mvc)

## Conteúdo

### Node Js

- [Resumo Node JS](#nodejs)

### HTTP

- [Métodos](#verbos-ou-métodos)

### API (Application Programming Interface)

- [REST e RESTful](#rest-e-restful)

### Arquitetura MVC ( model view controller )

- [controller](#📂-controller)
- [routes](#📂-routes)
- [model](#📂-model)
- [app](#appjs)

## NodeJS

É um interpretador Javascript que não depende do navegador.

Ele é formado pelo V8, motor interpretador de Javascript criado pelo Google, e pela libuv, uma biblioteca que deu características de linguagem back-end para o node.

Node.js revolucionou a forma de programar em Javascript, pois a linguagem evoluiu de uma forma de dar vida aos elementos no navegador para uma linguagem capaz de rodar sistemas em computadores/servidores.

## HTTP

É o protocolo de transferência de hipertexto.

O principal protocolo de comunicação entre computadores utilizados na internet.

Ele cria as regras para enviar e receber informações na internet.

Ele é responsável pelo o que acontece por debaixo dos panos quando usamos a internet.

### Verbos ou Métodos

| Verbos ou Métodos | Relação CRUD | Descrição | 
| ----------- | ----------- | ----------- |
| POST | `C`REATE(inserir e/ou ação) | consultar cadastrar um recurso ou dispar uma ação como enviar um email | 
| GET | `R`EAD(consulta) | consultar um recurso ou uma lista de recursos na API ex: [GET]`/marvel/filmes`| 
| PUT ou PATCH | `U`PDATE(atualizar ou substituir) | para atualizar um ou mais recursos, ex: atualizar um cátalago de um restaurante | 
| DELETE| `D`ELETE(apagar ou remover parcialmente(soft delete)) |  para deletar um recurso ou informação no sistema, ex: apagar uma playlist | 


## API (Application Programming Interface)

### REST e RESTful

Rest é uma abstração(forma de usar as regras) do protocolo HTTP para simplificar a construção de um web service, ou seja quem cria uma API com as restrições e regras do modelo Rest está criando na verdade API Restful.

O grande objetivo desse modelo é fazer com que os recursos estejam disponíveis através de URLs.

### **Algumas das regras:**

- Adotar convenção de URLs
- Basear em recursos
- Usar os verbos HTTP para indicar ações
- Ser stateless, ou seja, toda requisição é autossuficiente/independente

---

## Arquitetura MVC

```
📂 API     
├─ 📂 src 
│  ├─ 📂 controllers
│  │  └─ produtoController.js
│  ├─ 📂 models
│  │  └─ produtoModel.js
│  ├─ 📂 routes
│  │  └─ produtoRouter.js
│  └─ app.js
├─ package-lock.json
├─ package.json
├─ .gitignore 
├─ README.md
└─ server.js
```

#### Server.js
> Aqui no server que você vai chamar o app para escutar a porta e disponibilizar toda a aplicação a partir do localhost

#### App.js
> Aqui no app que você vai usar a rota raiz e ele centraliza todas as rotas, é responsavel também por fazer a conexão ao banco e é possivel utilizar middlewares (plugin) como o json parser ou o cors

#### 📂 Routes
>  Aqui nas rotas você vai usar os verbos para  executar os controllers 

#### 📂 Controller
> Aqui no controller você vai processar a requisição e fornecer as respostas de acordo com os parametros recebido na request, com o devido status code e payload no formato json

#### 📂 Model
> Por enquanto estamos apenas guardando nosso JSON aqui, mas no futuro será o lugar onde você irá modelar os esquemas de dados para o banco. Não fique ansiosa! Acredite no processo, ele funciona!

### Exercícios

- [Exercicio para casa](./exercicios/para-casa/README.md)

### Links Úteis

- [O que é uma API](https://aws.amazon.com/pt/what-is/api/)
- [Playlist - Javascript Resumo](https://www.youtube.com/playlist?list=PL9rc_FjKlX39T78CUANwmdta_d1CgUtMt)
- [API Rest Boas Praticas](https://restfulapi.net/rest-api-design-tutorial-with-example/)
- [URL / URI Convenção](https://restfulapi.net/resource-naming/)
- [Api Rest Boas Praticas Endpoint](https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/)
- [ CQRS ](https://pt.stackoverflow.com/questions/181688/o-que-%C3%A9-cqrs-e-como-implementar)
- [ CRUD ](https://blog.betrybe.com/tecnologia/crud-operacoes-basicas/)
- [ JavaScript: Destructuring ](https://www.devmedia.com.br/javascript-destructuring-assignment/41201)

## **Obrigada meninas, Bea**

- [instagram](https://www.instagram.com/isjanebea)
- [linkedin](https://www.linkedin.com/in/beatriz-ramerindo/)
- [github](https://github.com/isjanebia)
- email: [bea@ramerindo.com.br](mailto:bea@ramerindo.com.br)

<h1 align="center">
<p> Desenvolvido com :purple_heart: </p>
</div>