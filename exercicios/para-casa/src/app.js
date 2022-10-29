const express = require("express")
const meninasSuperPoderosasRouter = require("./routes/meninasSuperPoderosasRoutes")

const app = express()

app.use(express.json())

app.use("/anime", meninasSuperPoderosasRouter )

module.exports = app