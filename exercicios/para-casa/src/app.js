const express=require('express')
const animeRotas=require('./Routers/seriesRouters')

const app=express();
app.use(express.json())
//express.json se usa para quando eu for utilizar uma app para rotas da api
//é para usar o app.use(Express.json()) que é um recurso do Express que vai
// conseguir fazer interpretar o que está chegando via post ou via put e transformar
// aquilo em um objeto para eu poder armazenar, visualizar e manipular.
// sem ele a rota não consegue reconhecer o objeto passado pela rota

//poderia usar body-parser também, pois ele converte o texto da api para um arquivo js

app.use('/animes', animeRotas)

module.exports=app