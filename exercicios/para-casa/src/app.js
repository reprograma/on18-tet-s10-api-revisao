const express = require("express")
const irmaoDoJorelRouter = require("./routes/irmaoDoJorelRoutes")

const app = express()

app.use(express.json())

app.use("/animes",irmaoDoJorelRouter)

module.exports = app