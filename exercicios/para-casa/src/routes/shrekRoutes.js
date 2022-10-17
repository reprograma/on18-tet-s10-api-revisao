const express = require("express")
const controller = require("../controllers/shrekController")
const router = express.Router()

router.get("/shrek/personagens", controller.obterPersonagens)
router.get("/shrek/personagens/:id", controller.obterPersonagemPorId)
router.post("/shrek/personagens/cadastrar", controller.cadastrarPersonagem)
router.put("/shrek/personagens/atualizar/:id", controller.atualizarPersonagem)
router.delete("/shrek/personagens/deletar/:id", controller.deletarPersonagem)

module.exports = router
