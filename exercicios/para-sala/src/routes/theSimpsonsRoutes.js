const express = require("express")
const controller = require("../controllers/theSimpsonsControllers")

const router = express.Router()

router.get("/the-simpsons/personagens", controller.obterPersonagens)
router.post("/the-simpsons/personagens", controller.cadastrarPersonagens)

module.exports = router
