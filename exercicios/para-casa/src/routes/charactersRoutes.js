const express = require("express")
const controller = require("../controllers/charactersController")

const router = express.Router()

router.get("/characters", controller.get)
router.get("/characters/:id", controller.getId)
router.post("/characters", controller.post)
router.patch("/characters/:id", controller.patch)
router.delete("/characters/:id", controller.remove)

module.exports = router