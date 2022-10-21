const express = require("express")
const controller = require("../controllers/theSimpsonsController")

// Pegar o verbos HTTP do express
const router = express.Router()

// O método recebe: 
/* path -> caminho
personagens -> a última barra é o endpoint
*/

router.get("/the-simpsons/personagens", controller.obterPersonagens)
router.post("/the-simpsons/personagens", controller.cadastrarPersonagem)
router.post("/the-simpsons/personagens", controller.obterPersonagemPorId)

module.exports = router