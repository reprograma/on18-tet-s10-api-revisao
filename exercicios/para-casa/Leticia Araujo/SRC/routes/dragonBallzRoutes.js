const express = require("express")
const controller = require("../controllers/dragonBallzController")

// PEGA OS VERBOS HTPP DO EXPRESS
const router = express.Router()

/**
 * O METODO RECEBE O PATH COMO PRIMEIRO PARAMETRO
 * PATH = O CAMINHO
 * /PERSONAGENS => A ULTIMA BARRA É O EndPoint
 * O SEGUNDO PARAMETRO É A CONTROLLER
 */
router.get("/Dragon-Ball-Z/personagens", controller.obterPersonagens)
router.post("/Dragon-Ball-Z/personagens", controller.cadastrarPersonagem)
router.get("/Dragon-Ball-Z/personagens/:id", controller.personagemPorId)
router.put("/Dragon-Ball-Z/personagens/atualizar/:id", controller.personagemAtualizado)
router.delete("/Dragon-Ball-Z/personagens/deletar/:id", controller.deletaPersonagem)

module.exports = router