const express = require("express")
const controller = require("../controllers/theSimpsonsController")

//aqui pegamos os verbos http do express
const router = express.Router()

/**
 * o método recebe como primeiro parametro o path
 * path -> caminho
 * /personagens -> a última barra é o endpoint
 * e como segundo parâmetro, a controller
 */
router.get("/the-simpsons/personagens", controller.obterPersonagens)
router.post("/the-simpsons/personagens", controller.cadastrarPersonagem)
router.get("/the-simpsons/personagens/:id", controller.obterPersonagemPorId)

module.exports = router