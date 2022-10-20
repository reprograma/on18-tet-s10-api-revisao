const express = require("express")
const controller = require("../controllers/theSimpsonsController")

// aqui pegamos os verbos http do express
const router = express.Router()

/**
 * o método recebe como primeiro parametro o path
 * path -> caminho
 * /personagens -> a ultima barra é o endpoint
 * e como segundo parametro, a controller
 */
router.get("/the-simpsons/personagens", controller.obterPersonagens)
router.get("/the-simpsons/personagens/:id", controller.obterPersonagemPorId)
router.post("/the-simpsons/personagens", controller.cadastrarPersonagem)
router.patch("/the-simpsons/personagens/:id", controller.atualizarPersonagem)
router.delete("/the-simpsons/personagens/:id", controller.deletarPersonagem)

module.exports = router