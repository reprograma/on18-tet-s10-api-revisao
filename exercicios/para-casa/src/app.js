const express = require("express")

const app = express()

app.use(express.json())

const sailorMoonRouter = require("./routes/sailorMoonRoutes")

app.use("/anime", sailorMoonRouter)

module.exports = app