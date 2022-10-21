const express = require("express")
const controller = require("../controllers/stevenUniversoController")

// Pegar o verbos HTTP do express
const router = express.Router()

// O método recebe: 
/* path -> caminho
personagens -> a última barra é o endpoint
*/

router.get("/stevenUniverso/personagens", controller.obterPersonagens)
router.get("/stevenUniverso/personagens/:id", controller.obterPersonagemPorId)
router.post("/stevenUniverso/personagens", controller.cadastrarPersonagem)
router.patch("/stevenUniverso/personagens/:id", controller.atualizarPersonagem)
router.delete("/stevenUniverso/personagens/:id", controller.deletarPersonagem)



module.exports = router