# Passo a passo para construção de uma API REST

Criar pastas: 
SRC:
    - Model;
    ** theSimpsons.js
    - Controller;
    ** theSimpsonsController.js
    - Routes;
    ** theSimpsonsRoutes.js

Criar arquivos:
* app.js
* server.js
* .gitignore; 

Instalar: 
* dependências
** express -> framework para desenvolvimento de API
** nodemon -> dependência que reinicia o servidor a cada alteração feita no código 

## Procedimento
1. Criar o server
2. Pasta SRC
    1. Models
    2. Controllers
    3. Routes
3. Arquivos
 - src: 
    app.js
        - model
        - controller
        - routes
4. Desenvolvimento 
- Instalar as dependências 
    1. npm init -y
    2. npm i express
    3. npm i -D nodemon
    4. Atualizar o script de "start" para nodemon
    5. Adicionar o .gitignore para ignorar a pasta node_modules
- Modelar o banco de dados 
- Criar função de conexão do banco
- Para criar o arquivo básico do app.js (dentro da pasta src): 
    1. Importar o express
    2. Criar o app
    3. Usar o body-parser -> app.use(express.json())
    4. Exportar o app
- Para criar o arquivo básico controller (dentro da pasta Controllers):
  1. Importar o banco de dados
  2. Criar um get all
  3. Exportar o get all
- Para criar o arquivo básico da router (dentro da pasta Routes): 
  1. Importar o express
  2. Criar o router para ter acesso aos métodos HTTP
  3. Criar os endpoints
  4. Exportar a router
  

