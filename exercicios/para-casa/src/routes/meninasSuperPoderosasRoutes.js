const express = require("express")
const controller = require("../controllers/meninasSuperPoderosasController")

const router = express.Router()

router.get("/animes/meninas-Super-Poderosas", controller.obterPersonagens)

module.exports = router