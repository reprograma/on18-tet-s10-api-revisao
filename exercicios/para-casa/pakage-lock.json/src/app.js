// chamou o express
const express = require("express")

const horaDeAventuraRouter = require("../src/routes/horaDeAventuraRoutes")

// criou o app
const app = express()

// criou um body-parser
app.use(express.json())

// criou nossa rota raiz
app.use("/cartoon", horaDeAventuraRouter)

// exportando o app
module.exports = app