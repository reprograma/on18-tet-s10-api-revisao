model
- theSimpsons.js
controller
- theSimpsonsController.js
routes
- theSimpsons.js
app.js
server
.gitignore

Dependência
- express
- -nodemon
  - npm i -D nodemon (o D é para informar que é uma dependência para dessenvolvimento)

## Passo a passo
1. Criou o server
2. Pasta SRC
   1. models
   2. controllers
   3. routes
3. Arquivos
    - src
      - app.js
        - model
        - controller
        - routes

4. Desenvolvimento
- instalar as dependencias
  - 1. npm init -y
  - 2. npm i express
  - 3. npm i -D nodemon
  - 4. atualizou o script de start para utilizar o nodemon
  - 5. adicionar o .gitignore e ignorar a mode_modules/
- modelar o nosso banco
    1. criou a função de conexão do banco
- basico do app
    1. importar o express
    2. criar o app
    3. usar o body-parser
    4. exportar o app
- basico da controller
    1. importar o db
    2. criar um get all
    3. exportar o get all
- basico da router
    1. importar o express
    2. cria o router (para ter acesso aos metodos http)
    3. criamos os endpoints
    4. exportamos a router