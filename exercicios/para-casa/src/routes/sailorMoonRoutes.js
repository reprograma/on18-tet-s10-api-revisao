const controllers = require("../controllers/sailorMoonControllers")

const express = require("express")

const router = express.Router()

router.get("/sailor-moon/personagens",controllers.buscarPersonagens)

router.get("/sailor-moon/busca/:id", controllers.getById )

router.get("/sailor-moon/busca-geral",controllers.getByQuery)

router.post("/sailor-moon/nova-personagem", controllers.adicionarPersonagem)

router.put("/sailor-moon/update/:id", controllers.atualizaPersonagem)

router.delete ("/sailor-moon/delete/:id", controllers.deletaPersonagem)

module.exports = router