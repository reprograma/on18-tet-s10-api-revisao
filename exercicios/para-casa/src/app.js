const express = require("express")
const dragRaceRouter = require("./routes/dragRaceRoutes")

const app = express()

app.use(express.json())

app.use("/reality", dragRaceRouter)

module.exports = app