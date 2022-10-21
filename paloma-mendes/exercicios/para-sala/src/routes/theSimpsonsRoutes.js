const express = require("express")
const controller = require("../controllers/theSimpsonsController")

const router = express.Router()


/** o metodo recebe como primeiro parametro o path
* path -> caminho
* /personagens -> a ultima barra é o endpoint
* e como segundo parametro, a contrtoller
*/
router.get("/the-simpsons/personagens", controller.obterPersonagens)
router.post("/the-simpsons/personagens", controller.cadastrarPersonagem)
router.get("/the-simpsons/personagens/:id", controller.obterPersonagensPorId)

module.exports = router