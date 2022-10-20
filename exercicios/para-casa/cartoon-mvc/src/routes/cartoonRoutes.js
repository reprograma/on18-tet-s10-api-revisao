const controller = require("../controllers/cartoonCotroller")

const express = require("express")

const router = express.Router()

router.get("/", controller.getCartoon);
router.get("/:id/pequisabyId", controller.getCartoonById);
router.post("/cadastrar", controller.postCartoon);
router.put("/:id/update", controller.putCartoon);
router.delete("/:id/deletar", controller.deleteCartoon);

module.exports = router;