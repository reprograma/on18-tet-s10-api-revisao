const express = require("express")
const controller = require("../controllers/meninasSuperPoderosasController")
const router = express.Router()


router.get("/meninas-poderosas/personagens", controller.buscarPersonagens)
router.get("/meninas-poderosas/personagens/:id", controller.getById)
router.get("/meninas-poderosas/busca-geral",controller.getByQuery)
router.post("/meninas-poderosas/personagens/cadastrar", controller.cadastrarPersonagem)
router.put("/meninas-poderosas/personagens/atualizar/:id", controller.atualizarPersonagem)
router.delete("/meninas-poderosas/personagens/deletar/:id", controller.deletaPersonagem)

module.exports = router


