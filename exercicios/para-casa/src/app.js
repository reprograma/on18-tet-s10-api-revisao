const express = require("express")
const justiceLeagueRoutes = require("./routes/justiceLeagueRoutes")

const app = express()

app.use(express.json())

app.use("/cartoons", justiceLeagueRoutes)

module.exports = app