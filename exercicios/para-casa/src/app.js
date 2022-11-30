const express = require("express")
const dragonBallRouter = require("./routes/dragonBallRoutes")

const app = express()


app.use(express.json())

app.use("/animes", dragonBallRouter)

module.exports = app

