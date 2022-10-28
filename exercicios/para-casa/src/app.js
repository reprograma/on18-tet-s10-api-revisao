const express = require("express")

const deathNoteRouter = require("./routers/DeathNoteRoutes")

const app = express()

app.use(express.json())

// app.use("/animes", deathNoteRouter)

module.exports = app