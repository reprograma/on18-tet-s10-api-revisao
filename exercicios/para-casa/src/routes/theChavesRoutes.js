const express = require("express")
const controller = require("../controllers/theChavesController")

// aqui pegamos os verbos http do express
const router = express.Router()

/**
 * o método recebe como primeiro parametro o path
 * path -> caminho
 * /personagens -> a ultima barra é o endpoint
 * e como segundo parametro, a controller
 */
router.get("/the-chaves/personagens", controller.obterPersonagens)
router.post("/the-chaves/personagens", controller.cadastrarPersonagem)
router.get("/the-chaves/personagens/:id", controller.obterPersonagemPorId)
router.patch("/the-chaves/personagens/:id", controller.atualizarPersonagem)
router.delete("/the-chaves/personagens/:id", controller.deletarPersonagemPorId)

module.exports = router