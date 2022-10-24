const express = require("express")
const controller = require("../controllers/scoobyDoosController")

const router = express.Router()

router.get("/scooby-Doo/busca/:id", controller.getPersonagemById)
router.get("/scooby-Doo/busca", controller.getPersonagens)
router.post("/scoob-yDoo/cadastrar", controller.registerPersonagem)



module.exports = router