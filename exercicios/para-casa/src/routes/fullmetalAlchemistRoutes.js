const express = require("express")

const controller = require("../controllers/fullmetalAlchemistController")

const router = express.Router()

router.get("/fullmetal-alchemist/personagens", controller.getAll)
router.post("/fullmetal-alchemist/personagens/cadastrar", controller.postNew)
router.put("/fullmetal-alchemist/personagens/atualizar/:id", controller.putPersonagem)
router.delete("/fullmetal-alchemist/personagens/deletar/:id", controller.excludeById)
router.get("/fullmetal-alchemist/personagens/consultar/:id", controller.getById)



module.exports = router

