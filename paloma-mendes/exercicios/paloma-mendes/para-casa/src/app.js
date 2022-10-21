const express = require("express")

const tresEspiasDemaisRouter = require ("./routes/tresEspiasDemaisRoutes")

const app = express()

app.use(express.json())

app.use("/desenhos", tresEspiasDemaisRouter)

module.exports = app