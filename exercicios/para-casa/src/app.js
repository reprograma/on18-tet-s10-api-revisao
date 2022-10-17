const express = require("express")
const bobEsponjaRouter = require("./routes/bobEsponjaRoutes")

const app = express()

app.use(express.json())

app.use("/desenho", bobEsponjaRouter)

module.exports = app