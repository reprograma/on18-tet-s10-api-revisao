const express = require("express")
const controller = require("../controllers/tresEspiasDemaisController")

const router = express.Router()

// router.get("/tres-espias-demais", )
router.get("/tres-espias-demais/busca/:id", controller.getPersonagemById)
router.get("/tres-espias-demais/busca", controller.getPersonagens)
router.post("/tres-espias-demais/cadastrar", controller.registerPersonagem)
router.get("/tres-espias-demais/deletar/:id", controller.deletePersonagem)
router.put("/tres-espias-demais/atualizar-personagem/:id", controller.uptadePersonagem)


module.exports = router