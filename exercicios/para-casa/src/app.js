const express = require("express")

const chavesRouter = require("./routes/chavesRoutes")

const app = express()

app.use(express.json())

app.use("/seriado", chavesRouter)

module.exports = app