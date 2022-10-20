
const express = require("express")

const controller = require("../controllers/inuyashacontrollers")

const router = express.Router()


router.get("/inuyascha/catalogo", controller.catalogo ) 
router.get("/inuyasha/catalogo/:id", controller.getById)
router.get("/inuyasha/catalogo/title?", controller.getTitle)
router.post("/inuyasha/cadrastar", controller.cadrastarPersonagem)
router.delete("/inuyasha/deletar/:id", controller.deletarPersonagem)
router.patch("/inuyasha/atualizar/:id", controller.atualizar)



module.exports = router