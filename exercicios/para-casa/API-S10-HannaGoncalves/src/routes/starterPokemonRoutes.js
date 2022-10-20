const express = require("express")
const controller = require("../controllers/starterPokemonControllers")

const router = express.Router()
//add path+controller
router.get("/starter/test", controller.testRoute)
router.get("/starter/id/:id", controller.getPokemonById)
router.get("/starter/search", controller.findPokemon)
router.post("/starter/addnew", controller.addPokemon)

module.exports = router