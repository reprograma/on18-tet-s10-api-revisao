const express = require("express")
const controller = require("../controllers/jorelController")

const router = express.Router()

router.get("/irmao-do-jorel/personagens", controller.obterPersonagens)
router.get("/irmao-do-jorel/pesquisar/:id", controller.obterPersonagemPorId)
router.post("/irmao-do-jorel/cadastrar-personagem", controller.cadastrarPersonagem)
router.put("/irmao-do-jorel/atualizar/:id", controller.atualizarPersonagem)
router.delete("/irmao-do-jorel/excluir/:id", controller.deletaPersonagem)
router.get("/irmao-do-jorel/buscar", controller.getByQuery)

module.exports = router