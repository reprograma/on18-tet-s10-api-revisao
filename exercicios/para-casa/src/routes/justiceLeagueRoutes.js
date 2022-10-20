const express = require ("express")
const controller = require("../controllers/justiceLeaguecontroller")

const router = express.Router()
//exemplo para ser usado 
router.get("/justice-League/personagens", controller.obterPersonagemPorId)
router.post("/justice-League/personagens", controller.cadastrarPersonagem)
router.patch("/justice-League/personagens/:id", controller.atualizarPersonagem)
router.delete("justice-League/personagens/:id", controller.deletarPersonagem)

module.exports = router