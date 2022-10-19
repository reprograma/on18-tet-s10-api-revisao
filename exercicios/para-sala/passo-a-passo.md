### Passo a Passo

1. criou o server
2. pasta SRC
 1. models
 2. controllers
 3. routes
 4.  app.js
 
3. Desenvolvimento
 - instalar as dependencias
  1. npm init -y
  2. npm i express
  3. npm i -D nodemon
  4. Atulizou o script de start para utilizar o nodemon
  5. adicionar o .gitignore e ignorar a node_modules
   - modelar o nosso banco
   - criou a função de conexao do banco
 # basico do app
  - importar o express
  - criar o app
  - usar o body-parser
  - exportar o app
  - no server.js
  - importa o app
  - coloca o servidor para ouvir
 # basico da controller
  - importar o banco
  - criar um get all
  - exportar o get all
 # basico da routes
  - import o express
  - cria o router (para ter acesso aos metodos http)
  - criamos os endpoints
  - exportamos a router
