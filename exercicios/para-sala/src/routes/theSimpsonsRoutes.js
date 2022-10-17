const express = require("express") 
const controller = require("../controllers/theSimpsonsController")
const router = express.Router()

router.get("/animes/the-simpsons/personagens", controller.obterPersonagens)

router.post("/the-simpsons/personagens", controller.cadastrarPersonagem)

module.exports = router