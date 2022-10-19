const express = require("express")
const theChavesRouter = require("./routes/theChavesRoutes")

const app = express()

app.use(express.json())

app.use("/desenho", theChavesRouter)

module.exports = app