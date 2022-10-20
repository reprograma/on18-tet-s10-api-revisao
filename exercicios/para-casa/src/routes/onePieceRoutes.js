const express = require("express")
const controller = require("../controllers/onePieceControllers")

const router = express.Router()

router.get("/one-piece/personagens", controller.obterPersonagens)
router.post("/one-piece/personagens", controller.cadastrarPersonagem)

module.exports = router