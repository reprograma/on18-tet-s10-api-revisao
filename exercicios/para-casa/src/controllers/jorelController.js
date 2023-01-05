const db = require("../models/db")

const obterPersonagens = async (request, response) => {
    const personagens = await db("irmao-do-jorel")
    response.status(200).send(personagens)
}

const cadastrarPersonagem = async (request, response) => {
    const personagens = await db("irmao-do-jorel")
    const {
        nome,genero,bio
    } = request.body

    if (!nome || nome.trim() === "") {
        return response.status(400).send({ message: `O nome é obrigatório!` })
    }

    if (!bio || bio.trim() === "") {
        return response.status(400).send({ message: `A bio é obrigatório!` })
    }

    const nomeExiste = personagens.some(personagem => personagem.nome === nome)

    if (nomeExiste === true) {
        return response.status(409).send({ message: `O nome ${nome} já existe` })
    }

    const novoPersonagem = {
        id: personagens.length,
        nome,genero,bio
    }

    personagens.push(novoPersonagem)

    response.status(201).send(novoPersonagem)
}

const getByQuery = async (request, response) => {

    const personagens = await db("irmao-do-jorel")
    if (personagens.length === 0) return response.status(200).send([])

    const parametros = request.query
    console.log(parametros)

    if (Object.keys(parametros).length == 0) return response.status(200).send(personagens)

    const personagemFiltrado = []

    for (const personagem of personagens) {
        const chaves = Object.keys(personagem)

        for (const chave of chaves) {
            const personagemDado = personagem[chave].toString().toLowerCase()

            const buscaDados = parametros[chave] && parametros[chave].toLowerCase()
            console.log(personagemDado, buscaDados)

            if (personagemDado.includes(buscaDados)) {
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
    const personagens = await db("irmao-do-jorel")

    const personagemEncontrado = personagens.find(personagem => personagem.id == id)

    if (!personagemEncontrado) return response.status(404).send({
        message: `Nenhum personagem encontrado para esse id ${id}`
    })

    response.status(200).send(personagemEncontrado)
}

const atualizarPersonagem = async (request, response) => {

        const personagens = await db("irmao-do-jorel")

        let solicitaId = request.params.id
        let solicitaBody = request.body

        const personagemAtualizado = personagens.find(personagem => personagem.id == solicitaId)

        if(personagemAtualizado === undefined) {
            return response.status(404).send(`O personagem que você está tentando editar não foi encontrado`) 
        }

        solicitaBody.id = personagemAtualizado.id

        let chaves = Object.keys(personagemAtualizado)

        chaves.forEach(chave=>{
            if(solicitaBody[chave] == undefined){
                personagemAtualizado[chave] == personagemAtualizado[chave]

            }else{
                personagemAtualizado[chave] = solicitaBody[chave]
            }
        })

        response.status(204).send(personagemAtualizado)
}

const deletaPersonagem = async (request, response) => {
    const personagens = await db("irmao-do-jorel")
    const idRequest = request.params.id

    const personagemADeletar = personagens.find(personagem => personagem.id == idRequest)

    const indice = personagens.indexOf(personagemADeletar)

    personagens.splice(indice,1)

    response.status(200).send(`O personagem foi removido com sucesso`)
}

module.exports = {
    obterPersonagens,
    cadastrarPersonagem,
    obterPersonagemPorId,
    atualizarPersonagem,
    deletaPersonagem,
    getByQuery
}