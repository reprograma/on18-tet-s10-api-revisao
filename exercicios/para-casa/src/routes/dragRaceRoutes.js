const express = require("express")
const controller = require("../controllers/dragRaceController")

// aqui pegamos os verbos http do express
const router = express.Router()

router.get("/drag-race/drags", controller.obterDrags)
router.post("/drag-race/drags", controller.cadastrarDrag)
router.put("/drag-race/drags/update/:id", controller.updateGenerico)
router.delete("/drag-race/drags/deletar/:id", controller.deletarDrag)

module.exports = router