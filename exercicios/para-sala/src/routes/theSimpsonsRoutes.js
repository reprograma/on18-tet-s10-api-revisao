const express = require("express")
const controller = require("../controllers/theSimpsonsControllers")

const router = express.Router()

router.get("/the-simpsons/personagens", controller.obterPersonagens)
router.get("/the-simpsons/personagens/:id", controller.obterPersonagemPorId)
router.post("/the-simpsons/personagens", controller.cadastrarPersonagem)
router.patch("/the-simpsons/personagens/:id", controller.atualizarPersonagem)
router.delete("/the-simpson/personagens/:id", controller.deletarPersonagem)

module.exports = router