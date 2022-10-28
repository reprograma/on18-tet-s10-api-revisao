const controller=require("../controllers/desenhosController")

const express = require("express")

const router = express.Router();

router.get("/descricao", controller.getAll)

router.post("/cadastro/personagem",controller.cadastro)

router.delete("/deletar/personagem/del/:id",controller.deletar)

router.put("/cadastro/alteracao/:id", controller.alteracao)
module.exports = router;