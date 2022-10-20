const express = require("express");

const controller = require("../controllers/demonSlayerController");

const router = express.Router();

router.get("/demon-slayer/characters", controller.getCharacters);
router.get("/demon-slayer/characters/:id", controller.getCharacterById);
router.post("/demon-slayer/characters", controller.registerCharacter);
router.patch("/demon-slayer/characters/:id", controller.updateCharacter);
router.delete("/demon-slayer/characters/:id", controller.deleteCharacter);
router.put("/demon-slayer/characters/:id", controller.updateAnything);
module.exports = router;