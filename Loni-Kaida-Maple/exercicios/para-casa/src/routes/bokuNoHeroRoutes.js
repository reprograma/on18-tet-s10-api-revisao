const express = require("express");
const controller = require("../controllers/bokuNoHeroControllers");

const router = express.Router();

router.get("/mha/characters", controller.getCharacters);

module.exports = router;