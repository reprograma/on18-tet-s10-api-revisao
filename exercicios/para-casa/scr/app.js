const express = require("express")

const inuyashaRouter = require("./routes/inuyashaRoutes")

const app = express()

app.use(express.json())




app.use("/anime", inuyashaRouter)



module.exports = app