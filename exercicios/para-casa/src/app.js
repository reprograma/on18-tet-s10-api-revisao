const express = require("express")

const meninasSuperPoderosas = require("./routes/meninasSuperPoderosasRouter")

const app = express()

app.use(express.json())

app.use("/desenho", meninasSuperPoderosas)

module.exports = app

