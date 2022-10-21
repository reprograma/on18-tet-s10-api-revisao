const express = require("express")
const controller = require("../controllers/bobEsponjaController")
const router = express.Router()

router.get("/bob-esponja/personagens", controller.obterPersonagens)
router.get("/bob-esponja/personagens/:id", controller.obterPersonagemPorId)
router.post("/bob-esponja/personagens/cadastrar", controller.cadastrarPersonagem)
router.put("/bob-esponja/personagens/atualizar/:id", controller.atualizarPersonagem)
router.delete("/bob-esponja/personagens/deletar/:id", controller.deletarPersonagem)

module.exports = router