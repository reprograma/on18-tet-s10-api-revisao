const express = require("express")
const theSimpsonsRouter = require("./routes/theSimpsonsRoutes")

const app = express()

app.use(express.json())

app.use("animes", theSimpsonsRouter)

module.exports = app