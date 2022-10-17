const express = require("express")
const controller = require("../controllers/MeninasSuperPoderosasController")
const router = express.Router()

router.get ("/meninas-super-poderosas/personagens", controller.obterPersonagens)
router.get("/meninas-super-poderosas/personagens/:id", controller.obterPersonagemPorId)
router.post("/meninas-super-poderosas/personagens/cadastrar",controller.cadastrarPersonagem )
router.put("/meninas-super-poderosas/personagens/atualizar/:id",controller.atualizarPersonagem  )
router.delete("/bob-esponja/personagens/deletar/:id", controller.deletarPersonagem )

module.exports = router