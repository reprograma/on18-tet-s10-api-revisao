const express = require("express")
const onePieceRouter = require("./routes/onePieceRoutes")

const app = express()

app.use(express.json()) //body parser - não da pra trabalhar json sem ele

app.use("/animes", onePieceRouter)

module.exports = app