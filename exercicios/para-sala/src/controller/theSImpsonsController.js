const db= require('../model/theSimpsonsModel')

const asyncProject=async(req,res)=>{
    const personagens= await db('the-simpsons')

    res.status(200).send(personagens)
}
const cadastrarPersonagem=async(req,res)=>{
    const personagem=await db('the-simpsons')
    const novoPersonagem={ 
        nome,
        idade,
        bio,
        genero,
        profissao,
        id=personagem.length}=req.body

        const{nome,idade,bio,genero,profissao}=req.body

    personagem.push(novoPersonagem)
    const nomeExiste=personagem.some(personagem=personagem.nome=== nome)

    if(nomeExiste===true){
        return res.status(409).send({message:`o nome ${nome} ja existe`})
    }
    if(!nome){
        return res.status(400).send({mensage:`o nome é obrigatório`})
    }
}


module.exports={
    asyncProject,
    cadastrarPersonagem
}
