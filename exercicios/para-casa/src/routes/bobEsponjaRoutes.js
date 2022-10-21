const express = require("express")

const controller = require("../controllers/bobEsponjaControllers")

const router= express.Router()

router.get("/bob-esponja/personagens", controller.obterPersonagens)
router.get("/bob-esponja/personagens/:id", controller.obterPersonagemPorId)
router.post("/bob-esponja/personagens", controller.cadastrarPersonagem)
router.delete("/bob-esponja/personagens/:id", controller.deletarPersonagem)
router.patch("/bob-esponja/personagens/:id", controller.atualizarPersonagem)

module.exports = router