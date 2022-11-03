const express = require("express");
const { route } = require("../app");
const controller = require("../controllers/gundamController");

const router = express.Router();

router.get("/animes/gundam/characters", controller.getCharacter);
router.post("/gundam/characters", controller.insertCharacter);

module.exports = router;