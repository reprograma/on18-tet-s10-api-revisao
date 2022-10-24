const { request } = require("../app")
const db = require("../models/db")


const getPersonagemById = async (request, response) => {
    const dbCartoon = await db("scooby-doo")
    const idRequest = request.params.id
    const personagemEncontrado = dbCartoon.find(personagem => personagem.id == idRequest)

    if (personagemEncontrado === undefined) return response.status(404).send({
        message: `Nenhum personagem encontrado para o ID informado`
    })
    response.status(200).send(personagemEncontrado)
}
const getPersonagens = async (request, response) => {
    const dbCartoon = await db("scooby-Doo")
    if (dbDesenho.length === 0) return response.status(200).send([])
    const parametros = request.query

    if (Object.keys(parametros).length == 0) return response.status(200).send(dbCartoon)

    const filtrado = []

    for (const personagem of dbCartoon) {
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
            message: "Resultado Não escontrado"
        })
    }
    response.status(200).send(filtrado)
}


const registerPersonagem = async (request, response) => {
    const dbCartoon = await db("scooby-doo")
    const { nome, idade, comidaFavorita, corDoCabelo, } = request.body

    if (!nome || nome.trim() === "") {
        return response.status(400).send({ message: `O campo nome é obrigatório` })
    }
    if (!comidaFavorita || comidaFavorita.trim() === "") {
        return response.status(400).send({ message: `O campo profissão é obrigatório` })
    }
    if (isNaN(idade) || idade <= 0) {
        return response.status(400).send({ message: `O campo idade é obrigatório` })
    }
    if (isNaN(corDoCabelo) || corDoCabelo.trim() === "") {
        return response.status(400).send({ message: `O campo cor dos cabelos é obrigatório` })
    }

    const nomeExiste = dbCartoon.some(personagem => personagem.nome === nome)
    if (nomeExiste === true) {
        return response.status(409).send({ message: `O nome ${nome} já foi cadastrado` })
    }

    const novoPersonagem = {
        id: dbCartoon.length,
        nome, idade, profissao, corDosOlhos, corDoCabelo, comidaFavorita
    }

   Cartoon.push(novoPersonagem)
    response.status(201).send(novoPersonagem)
}


module.exports = {
    getPersonagemById,
    getPersonagens,
    registerPersonagem,
    uptadePersonagem
}