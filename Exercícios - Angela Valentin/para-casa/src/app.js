const express = require("express")
const shrekRouter = require("./routes/shrekRoutes")

const app = express()

app.use(express.json())

app.use("/cartoons", shrekRouter)

module.exports = app