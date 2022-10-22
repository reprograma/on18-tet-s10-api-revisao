const express = require("express")
const controller = require("../controllers/horaDeAventuraController")



const router = express.Router()

router.get("/hora-de-aventura/personagens", controller.obterPersonagens)
router.get("/hora-de-aventura/personagens/:id", controller.obterPorId)
router.post("/hora-de-aventura/personagens", controller.cadastrarPersonagem)

module.exports = router