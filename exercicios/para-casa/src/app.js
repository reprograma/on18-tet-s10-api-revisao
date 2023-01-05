const express = require("express")
const irmaoDoJorelRouter = require("./routes/jorelRoutes")

const app = express()

app.use(express.json())

app.use("/animes",jorelRouter)

module.exports = app