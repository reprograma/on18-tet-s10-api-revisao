const express = require("express")
const stevenUniversoRouter = require("./routes/stevenUniversoRoutes")

const app = express()

//body parse
app.use(express.json())

// rota de animes no geral
app.use("/cartoon", stevenUniversoRouter)

// exportar o app para o projeto todo
module.exports = app 