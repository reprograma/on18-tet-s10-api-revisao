const express=require('express')
const controller=require('../Controllers/seriesControllers.js')

const router = express.Router();

router.get('/BoJack-Horseman/Personagens', controller.drawingRead)

router.post('/BoJack-Horseman/Cadastro', controller.cadastrarPersonagem)

// router.get('/animes/BoJack-Horseman/teste', controller.teste)

module.exports = router ;
