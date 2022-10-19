const drawingDatabase = require('../Modell/animes')

const drawingRead=async(req,res)=>{
    const animesBase=await drawingDatabase('The-Movie-BoJack-Horseman')
    res.status(200).send(animesBase)
}

const cadastrarPersonagem= async(req, res)=>{
    res.status(200).send('deu certo gata')
}
// const teste=(req,res)=>{
//     console.log('deu bom')
// }


module.exports={drawingRead, 
                cadastrarPersonagem}