const express=require('express')
const controller=require('../controller/theSImpsonsController')

const router=express.Router()

router.get('/the-simpsons/personagem', controller.asyncProject)
router.post('the-simpsons/cadastrarPersonagem', controller.cadastrarPersonagem)

module.exports=router