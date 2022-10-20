const express = require("express")
const theSimpsonsRouter = require("./routes/theSimpsonsRoutes")

const app = express()

//body parse
app.use(express.json())

// rota de animes no geral
app.use("/animes", theSimpsonsRouter)

// exportar o app para o projeto todo
module.exports = app 