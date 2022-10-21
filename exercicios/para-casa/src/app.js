const express = require("express")
const dragonBallRoutes = require("./routes/dragonBallRoutes")

const app = express()

app.use(express.json())

app.use("/animes", dragonBallRoutes)

module.exports = app