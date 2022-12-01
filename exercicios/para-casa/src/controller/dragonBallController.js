const { request, response } = require("../app")
const db = require("../models/db")

const obterPersonagens = async (request, response)=>{
    
    const personagens = await db("dragon-ball")
    if (personagens.length === 0) return response.status(200).send([])
    const parametros = request.query
    if (Object.keys (parametros).length == 0) return response.status(200).send
    (personagens)

    const filtrado = []

    for (const personagem of personagens){
     const chaves = Object.keys(personagem)

     for (const chave of chaves) {
        const personagemDado = personagem[chave].toString().toLowerCase()
         
        const buscaDado = parametros[chave] && parametros[chave].toLowerCase()
        if (personagemDado.includes(buscaDado)) {
            filtrado.push(personagem)
        }

     }
    }
   if (filtrado.length === 0){
    return response.status(404).send({
        message: "Nenhum resultado para essa busca"
    })
   }

    response.status(200).send(filtrado)
}

const cadastrarPersonagem = async(request, response) => {
    const personagens = await db("dragon-ball")
    const {nome, idade, bio, genero, profissao
    } = request.body

    if(!nome || nome.trim() === "" ) {
     return response.status(400).send({ message:`Nome é obrigatorio`})
    }

    if (isNaN(idade) || idade <= 0) {
        return response.status(400).send({ message :`A idade é obrigatoria`})
    }

    const nomeExiste = personagens.some(personagem => personagem.nome === nome)

    if (nomeExiste === true) {
        return response.status(409).send({message: `O nome ${nome} já existe`})
    }

    const novoPersonagem ={
        id: personagens.length,
        nome, idade, genero, profissao, bio
        
    }
 
    personagens.push(novoPersonagem)

    response.status(201).send(novoPersonagem)
}

const obterPersonagemPorId = async(request, response) =>{
    const {id} = request.params
    const personagem = await db ("dragon-ball")

    const personagemEncontrado = personagens.find(personagem => personagem.id == id)

    if(!personagemEncontrado) return response.status(404).send({
        message: `Nenhum personagem encontrado para esse id ${id}`
    })

    response.status(200).send(personagemEncontrado)
    
}


module.exports ={
    obterPersonagemPorId,
    obterPersonagens,
    cadastrarPersonagem
}