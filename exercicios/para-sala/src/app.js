// chamei o express
const express = require("express")

const theSimpsonsRouter = require("./routes/theSimpsonsRoutes")

// disse oq quero desse express
const app = express()

// ponto de conexão, também é uma espécie de body-parser, converte o json que vem de texto para o objeto javascript
app.use(express.json())

app.use("/animes", theSimpsonsRouter)

module.exports =  app