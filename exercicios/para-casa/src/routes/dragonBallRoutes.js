const express = require("express")
const controller = require("../controllers/dragonBallControllers")


const router = express.Router()


router.get("/dragon-ball/personagens", controller.obterPersonagens)
router.get("/dragon-ball/personagens/:id", controller.obterPersonagemPorId)
router.post("/dragon-ball/personagens", controller.cadastrarPersonagem)
router.patch("/dragon-ball/personagens/:id", controller.atualizarPersonagem)
router.delete("/dragon-ball/personagens/:id", controller.deletarPersonagem)

module.exports = router
