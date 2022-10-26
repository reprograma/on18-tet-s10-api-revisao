const express = require("express")
const dragonBallzRouter = require("./routes/dragonBallzRoutes")

const app = express()

app.use(express.json())

// ROTA RAÍZ
app.use("/anime", dragonBallzRouter)

module.exports = app