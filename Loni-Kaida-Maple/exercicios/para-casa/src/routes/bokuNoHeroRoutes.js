const express = require("express");
const controller = require("../controllers/bokuNoHeroControllers");

const router = express.Router();

router.get("/mha/characters", controller.getCharacters);
router.get("/mha/characters/:id", controller.getCharacterById);
router.post("/mha/characters", controller.insertCharacter);
router.patch("/mha/characters/id:", controller.updateCharacter);
router.delete("/mha/characters/id:", controller.deleteCharacter);

module.exports = router;