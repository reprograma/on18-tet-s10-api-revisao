

const db = require("../models/db")

const obterPersonagens = async (request, response) => {

    const personagens = await db("chaves")
    if (personagens.length === 0) return response.status(200).send([])

    const parametros = request.query

    if (Object.keys(parametros).length == 0) return response.status(200).send(personagens)

    const personagemFiltrado = []

    for (const personagem of personagens) {
        const chaves = Object.keys(personagem)

        for (const chave of chaves) {
            const personagemDado = personagem[chave].toString().toLowerCase()

            const buscaDado = parametros[chave] && parametros[chave].toLowerCase()

            if (personagemDado.includes(buscaDado)) {
                personagemFiltrado.push(personagem)
            }
        }
    }

    if (personagemFiltrado.length === 0) {
        return response.status(404).send({
            message: "Desculpe, não encontramos nenhum resultado para essa busca!"
        })
    }

    response.status(200).send(personagemFiltrado)
}
const obterPersonagemPorId = async (request, response) => {
    const { id } = request.params
    const personagens = await db("chaves")

    const personagemEncontrado = personagens.find(personagem => personagem.id == id)

    if (!personagemEncontrado) return response.status(404).send({
        message: `Nenhum personagem encontrado para esse id ${id}`
    })

    response.status(200).send(personagemEncontrado)
}
const cadastrarPersonagem = async (request, response) => {
    const personagens = await db ("chaves")

    const {
        nome, idade, genero, profissao
    } = request.body

    if (!nome || nome.trim() === "") {
        return response.status(400).send({ message: `O nome é obrigatório!` })
    }

    if (!nome || nome.trim() === "") {
        return response.status(400).send({ message: `O nome é obrigatório!` })
    }

    const nomeExiste = personagens.some(personagem => personagem.nome === nome)

    if (nomeExiste === true) {
        return response.status(409).send({ message: `O nome ${nome} já existe` })
    }

    const novoPersonagem = {
        id: personagens.length,
        nome, idade, genero, profissao
    }

    personagens.push(novoPersonagem)

    response.status(201).send(novoPersonagem)
}
const atualizarPersonagem = async (request, response) => {
    try {
        const personagens = await db("chaves")

        let solicitaId = request.params.id
        let solicitaBody = request.body

        const personagemAtualizado = personagens.find(personagem => personagem.id == solicitaId)

        if (personagemAtualizado == undefined) throw new Error("Personagem não encontrado!")

        solicitaBody.id = personagemAtualizado.id

        let chaves = Object.keys(personagemAtualizado)

        chaves.forEach((chave) => {

            if (solicitaBody[chave] == undefined) {
                personagemAtualizado[chave] = personagemAtualizado[chave]

            } else {
                personagemAtualizado[chave] = solicitaBody[chave]
            }
        })

        response.status(204).send()

    } catch (error) {
        response.status(404).send({ message: error.message })
    }
}

const deletarPersonagem = async (request, response) => {
    try {
        let personagens = await db("chaves")

        const solicitaId = request.params.id

        const personagemDeletado = personagens.find(personagem => personagem.id == solicitaId)

        if (personagemDeletado == undefined) throw new Error("id não encontrado")

        const index = personagens.indexOf(personagemDeletado)

        personagens.splice(index, 1)

        response.status(204).send()
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}



module.exports = {
    obterPersonagens,
    obterPersonagemPorId,
    cadastrarPersonagem,
    atualizarPersonagem,
    deletarPersonagem
    
   
}
