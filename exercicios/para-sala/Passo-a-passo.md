Model
  - theSimpsons.js
Controller
  - theSimpsonsController.js
Routes
  - theSimpsonsRoutes.js
App
Aerver
.gitignore


 * Dependências
  - express -> framework para desenvolvimento de APi's.
  - nodemon -> é uma dependência que reinicia o servidor a cada alteração no código.

  1. Criar o server
  2. Criar pasta src
   - Criar models
   - Criar controllers
   - Criar routes
  3. Arquivos
   - src
    . app.js
        - model
        - controller
        - routes
  4. Desenvolvimento
   - Instalar as dependências  
    1. npm init -y
    2. npm i express
    3. npm i -D nodemon
    4. Atualizou o scritp de start para utilizar o nodemon  
    5. Adicionar o .gitignore e ignorar a node_modules
   - Modelar o nosso banco
   - criar a função de conexão do banco
      1. basico do app
   - importar o express
   - criar o app
   - usar o body-parser
   - exportar o app
      2. basico da controller
   - importar o banco
   - criar um get all
   - exportar o get all
      3. Básico da router
      - Import o express
      - Cria o router (para ter acesso aos metodos http)
      - Criamos os endpoints
      - Exportamos a pouter
 