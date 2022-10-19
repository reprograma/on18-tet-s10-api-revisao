model
 - theSimpsons.js
controller
 - theSimpsonsController.js
routes
 - theSimpsonsRoutes.js
server
app.js
.gitignore
dependencias
 - express -> framework para desenvolvimento de API
 - nodemon -> é uma dependência que reinicia o servidor a cada alteração no código
 - cors* - torna a API pública (senão a api só roda no nosso computador)- não vamos usar nesse exercício.

 ###Passo a Passo

 1. criou o server
 2. pasta SRC
    1.models
    2.controllers
    3.routes

3. Arquivos
    - SRC
        app.js
        - model
        - controller
            arquivoController.js
        - routes
            arquivoRoutes.js

4. Desenvolvimento
 - instalar as dependências
    1. npm init -y
    2. npm i express
    3. npm i nodemon
    4. atualizou o script no package.json para nodemon
 - modelar o nosso banco
 - criou a função de conexão com o banco
 - básico do app
    - importar o express
    - criar o app
    - Usar o body parser
    - exportar o app
    - no server.js
        - importa o app
        - coloca o servidor para ouvir
- básico da controller
    - importar o banco
    - criar um getAll
    - exportar o getAll 