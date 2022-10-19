1 MODEL
 - DragonBallZ.js
2 CONTROLLER
 - DragonBallZController.js
3 ROUTES
 - DragonBallZRoutes.js
4 APP.JS
5 SERVER.JS
6 .GITIGNORE

7 DEPENDENCIAS
 - express
 - nodemon
 - cors

 ### PASSO A PASSO
 1. CRIAR O SERVER.JS --> OK!
 2. CRIAR PASTA SRC --> OK!
  1. MODELS --> OK!
  2. CONTROLLERS --> OK!
  3. ROUTES --> OK!
3. ARQUIVOS
 - SRC 
  APP.JS --> OK!
  - MODEL --> OK!
  - db.js --> OK!
  - CONTROLLER
  - ROUTES
4. DESENVOLVIMENTO == ANTES DE TUDO!
 - INSTALAR AS DEPENDENCIAS --> OK!
  1. npm init -y --> OK!
  2. npm i express --> OK!
  3. npm i -D nodemon --> OK!
  4. atualizar o script  de start para usar o nodemon --> OK!
  5. add .gitignore e ignorar a node_modules
 - MODELAR O NOSSO BANCO --> OK!
 - CRIAR FUNÇÃO DE CONEXÃO DO BANCO DE DADOS --> OK!
1. BÁSICO DO APP.JS
  - IMPORTAR O EXPRESS --> OK!
  - CRIAR O APP --> OK!
  - USAR O BODY-PARSER
  - EXPORTAR O APP --> OK!
  * NO SERVER.JS 
   - IMPORTAR O APP --> OK!
   - COLOCAR O SERVIDOR PARA RODAR --> OK!
2. BÁSICO DA CONTROLLER
  - IMPORTAR O BANCO
  - CRIAR UM  GET ALL
  - EXPORTAR O GET ALL
3. BÁSICO DA ROUTER
  - IMPORTAR O EXPRESS
  - CRIAR O ENDOINTS
  - EXPORTAR A ROUTER