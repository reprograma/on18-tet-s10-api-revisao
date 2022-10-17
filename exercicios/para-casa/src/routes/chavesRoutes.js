const express = require("express")

const controller = require("../controllers/chavesController")

const router = express.Router()

router.get("/chaves/personagens", controller.obterPersonagens)
router.get("/chaves/personagens/:id", controller.obterPersonagemPorId)
router.post("/chaves/personagens/cadastrar", controller.cadastrarPersonagem)
router.put("/chaves/personagens/atualizar/:id", controller.atualizarPersonagem)
router.delete("/chaves/personagens/deletar/:id", controller.deletarPersonagem)
module.exports = router