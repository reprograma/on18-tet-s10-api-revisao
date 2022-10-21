const { request } = require("../app")
const db = require("../models/db")

//busca por ID
const getPersonagemById = async (request, response) => {
    const dbDesenho = await db("tres-espias-demais")
    const idRequest = request.params.id
    const personagemEncontrado = dbDesenho.find(personagem => personagem.id == idRequest)

    if (personagemEncontrado === undefined) return response.status(404).send({
        message: `Nenhum personagem encontrado para o ID informado`
    })
    response.status(200).send(personagemEncontrado)
}
//busca por parametros
const getPersonagens = async (request, response) => {
    const dbDesenho = await db("tres-espias-demais")
    if (dbDesenho.length === 0) return response.status(200).send([])
    const parametros = request.query

    if (Object.keys(parametros).length == 0) return response.status(200).send(dbDesenho)
    
    const filtrado = []

    for (const personagem of dbDesenho) {
        const chaves = Object.keys(personagem)
        for (const chave of chaves) {
            const dadoPersonagem = personagem[chave].toString().toLowerCase()
            const buscaDado = parametros[chave] && parametros[chave].toLowerCase()
            if (dadoPersonagem.includes(buscaDado)) {
                filtrado.push(personagem)
            }
        }
    }

    if (filtrado.length === 0) {
        return response.status(404).send({
            message: "Nenhum resultado para essa busca"
        })
    }
    response.status(200).send(filtrado)
}

//cadastrar personagem
const registerPersonagem = async (request, response) => {
    const dbDesenho = await db("tres-espias-demais")
    const { nome, idade, profissao, corDosOlhos, corDoCabelo, comidaFavorita } = request.body

    if (!nome || nome.trim() === "") {
        return response.status(400).send({ message: `O campo nome é obrigatório` })
    }
    if (!profissao || profissao.trim() === "") {
        return response.status(400).send({ message: `O campo profissão é obrigatório` })
    }
    if (isNaN(idade) || idade <= 0) {
        return response.status(400).send({ message: `O campo idade é obrigatório` })
    }

    const nomeExiste = dbDesenho.some(personagem => personagem.nome === nome)
    if (nomeExiste === true) {
        return response.status(409).send({ message: `O nome ${nome} já foi cadastrado` })
    }

    const novoPersonagem = {
        id: dbDesenho.length,
        nome, idade, profissao, corDosOlhos, corDoCabelo, comidaFavorita
    }

    dbDesenho.push(novoPersonagem)
    response.status(201).send(novoPersonagem)
}
//deletar personagem
const deletePersonagem = async (request, response) => {
    const dbDesenho = await db("tres-espias-demais")
    let idRequest = request.params.id

    personagemEncontrado = dbDesenho.find(personagem => personagem.id == idRequest)

    const indice = dbDesenho.indexOf(personagemEncontrado)
    dbDesenho.splice(indice, 1)
    response.status(200).json({
        "message": `Personagem do ID ${idRequest} deletado com sucesso.`, personagemEncontrado
    })
}
    //Atualizar personagem
const uptadePersonagem = async (request, response) => {
        dbDesenho = await db("tres-espias-demais")
        let idRequest = request.params.id
        let bodyRequest = request.body

        const personagemEncontrado = dbDesenho.find(personagem => personagem.id == idRequest)

        bodyRequest.id = personagemEncontrado.id

        let chaves = Object.keys(personagemEncontrado)

        chaves.forEach((chave) => {
            if (bodyRequest[chave] == undefined) {
                personagemEncontrado[chave] = personagemEncontrado[chave]
            } else {
                personagemEncontrado[chave] = bodyRequest[chave]
            }
        })

        response.status(200).json({ "message": `Personagem atualizado com sucesso`, personagemEncontrado})
}

module.exports = {
    getPersonagemById,
    getPersonagens,
    registerPersonagem,
    deletePersonagem,
    uptadePersonagem
}