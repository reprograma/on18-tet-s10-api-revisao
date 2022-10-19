const dbConfig = require("../models/dbConfig")

async function dbConnect(){
    return await dbConfig.bancoDeDados("sailor-moon")
}

const buscarPersonagens = async (request, response)=>{
    const personagensSailorMoon = await dbConnect()

    response.status(200).send(personagensSailorMoon)
}

const getById = async (request, response)=>{
    const sailorMoonJson = await dbConnect()
    const idRequest = request.params.id

    const personagemEncontrado = sailorMoonJson.find(personagem=>personagem.id == idRequest)

    if(personagemEncontrado == undefined) throw new Error("ID inválido") 

    response.status(200).send(personagemEncontrado)
}

const getByQuery = async (request, response)=>{
    const sailorMoonJson = await dbConnect()

    if(sailorMoonJson.length === 0) return response.status(200).send([])

    const buscaPorParametro = request.query

    if (Object.keys(buscaPorParametro).length == 0) return response.status(200).send(sailorMoonJson)

    const personagemFiltrado = []

    for (const personagem of sailorMoonJson){
        const chaves = Object.keys(personagem)

        for (const chave of chaves) {
            const dadosDoPersonagem = personagem[chave].toString().toLowerCase()

            const dadosDaBusca = buscaPorParametro[chave] && buscaPorParametro[chave].toLowerCase()

            if(dadosDoPersonagem.includes(dadosDaBusca)){
                personagemFiltrado.push(personagem)
            }
        }
    }

    if (personagemFiltrado.length === 0) {
        return response.status(404).send({
            message: "Nenhum resultado para essa busca"
        })
    }
    response.status(200).send(personagemFiltrado)  
}

const adicionarPersonagem = async (request, response) => {
    const personagensSailor = await dbConnect()

    //nome e poder serão obrigatórios

    const {
        nome, idade, identidadeCivil, poder 
    } = request.body
    
    if(!nome || nome.trim() === "") {
        return response.status(400).send({message: `O nome da personagem é obrigatório`})
    }

    if (!poder || poder.trim()==="") {
        return response.status(400).send({message: `O poder da personagem é obrigatório`})
    }

    const verificaNome = personagensSailor.some(personagem => personagem.nome === nome)
    if(verificaNome === true){
        return response.status(409).send({ message: `A personagem ${nome} já existe no catálogo`})
    }

    const novaPersonagem = {
        id:personagensSailor.length, 
        nome, idade, identidadeCivil, poder 
    }

    personagensSailor.push(novaPersonagem)

    response.status(201).send(novaPersonagem)
}

const atualizaPersonagem = async (request,response)=>{
    const personagensSailor = await dbConnect()
    const idRequest = request.params.id
    const atualizacao = request.body

    const personagemEditado = personagensSailor.find(personagem => personagem.id == idRequest)
        
    if(personagemEditado === undefined) {
        return response.status(404).send(`O personagem que você está tentando editar não foi encontrado`) 
    }

    atualizacao.id = personagemEditado.id

    let chaves = Object.keys(personagemEditado)
    
    chaves.forEach(chave=>{
        if(atualizacao[chave] == undefined){
            personagemEditado[chave] == personagemEditado[chave]
        
        }else{
            personagemEditado[chave] = atualizacao[chave]
        }
    })
    
    response.status(204).send(personagemEditado)
}

const deletaPersonagem = async (request, response) => {
    const personagensSailorMoon = await dbConnect()
    const idRequest = request.params.id

    const personagemADeletar = personagensSailorMoon.find(personagem => personagem.id == idRequest)
   
    const indice = personagensSailorMoon.indexOf(personagemADeletar)
    
    personagensSailorMoon.splice(indice,1)

    response.status(200).send(`O personagem foi removido com sucesso`)
}


module.exports = {
    buscarPersonagens,
    getById,
    getByQuery,
    adicionarPersonagem,
    atualizaPersonagem,
    deletaPersonagem
}