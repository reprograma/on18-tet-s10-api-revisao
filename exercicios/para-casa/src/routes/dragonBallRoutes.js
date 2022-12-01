const express = require("express")
const controller = require("../controller/dragonBallController")

const router = express.Router()

router.get("/dragon-ball/personagens", controller.obterPersonagens)
router.post("/dragon-ball/personagens", controller.cadastrarPersonagem)


module.exports = router