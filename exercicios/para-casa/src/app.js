const express = require("express")
const fullmetalAlchemistRouter = require("./routes/fullmetalAlchemistRoutes")

const app = express()

app.use(express.json())

app.use("/animes",fullmetalAlchemistRouter)


module.exports = app
