const express = require("express")
const pokemonRouter = require("./routes/starterPokemonRoutes")

const app = express()
app.use(express.json())

app.use("/pokemon", pokemonRouter)

module.exports=app