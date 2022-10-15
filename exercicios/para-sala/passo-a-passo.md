model
 - theSimpsons.js
controller
 - theSimpsonsController.js
routes
 - theSimpsonsRoutes.js
app.js
server
.gitignore

dependencias
 - express -> framework para desenvolvimento de API.
 - nodemon -> é uma dependencia que reinicia o servidor a cada alteração no código.

### Passo a Passo

1. criou o server
2. pasta SRC
 1. models
 2. controllers
 3. routes
3. Arquivos
 - src
  app.js
    - model
    - controller
    - routes

4. Desenvolvimento
 - instalar as dependencias
  1. npm init -y
  2. npm i express
  3. npm i -D nodemon
  4. Atulizou o script de start para utilizar o nodemon
  5. adicionar o .gitignore e ignorar a node_modules
 - modelar o nosso banco
 - criou a função de conexao do banco
 1. basico do app
  - importar o express
  - criar o app
  - usar o body-parser
  - exportar o app
  - no server.js
    - importa o app
    - coloca o servidor para ouvir
2. basico da controller
  - importar o banco
  - criar um get all
  - exportar o get all
3. basico da router
  - import o express
  - cria o router (para ter acesso aos metodos http)
  - criamos os endpoints
  - exportamos a router