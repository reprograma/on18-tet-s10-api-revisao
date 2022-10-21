const express = require("express")


const bobEsponjaRoutes  = require("./routes/bobEsponjaRoutes")

const app = express()

app.use(express.json())

app.use("/desenhos", bobEsponjaRoutes)

module.exports = app
