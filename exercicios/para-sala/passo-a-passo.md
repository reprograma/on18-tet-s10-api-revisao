model.js
- theSimpsons.js
controller.js
- theSimpsonsController.js
routes.js
-theSimpsonsRoutes.js
app.js
server.js
.gitignore
dependências: express/nodemon
colocar o node modules no .gitignore

## Passo a passo

1. Criar o server.js
2. Criar pasta SRC
  2.1 models
  2.2 controllers
  2.3 routes
3. Arquivos
  3.1 src
    3.1.1 app.js
    3.1.2 model.js
    3.1.3 controller.js
    3.1.4 routes.js
4 Desenvolvimento
 4.1 instalar as dependências
   *npm init -y - gerar a package-lock e a package.json
   *npm i express - framework para desenvolvimento de API
   *npm i -D nodemon - dependência que reinicia o servidor a cada atualização
   *npm i cors - depend~encia que deixa nossa API pública
 4.2 modelar nosso banco
   4.2.1 criar o .gitignore e colocar a node_modules
   4.2.2 começar pela model
   4.2.3 criar a função db que conecta o banco de dados da Model
   4.2.4 modelar o app.js iportando o express, usar o body-parse e exportar o app.js
   4.2.5 importar o banco na controller
   4.2.6 criar um get all e exportar o get all
   4.2.7 no server.js importar o app.js e colocar o servidor para ouvir a porta
   4.2.8 no router: importamos o express, criamos o router (para ter acesso aos métodos http) e criamos os endpoints; exportamos a router
   