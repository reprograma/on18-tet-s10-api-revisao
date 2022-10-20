const express = require("express")
const router = require("./routes/charactersRoutes")

const app = express()

app.use(express.json())
app.use("/cartoons", router)

module.exports = app