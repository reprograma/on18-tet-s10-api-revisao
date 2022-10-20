const db = require("../models/db")

const obterPersonagens = async (request, response) => {

    const personagens = await db("the-simpsons")

    response.status(200).send(personagens)
}

const cadastrarPersonagens = async(request, reponse) => {
    const personagens = await db("the-simpsons")

    const {
        nome, idade, genero, profissao, bio
    } = request.body

    const novoPersonagem = {
        nome, idade, genero, profissao, bio
    }
}

module.exports = {
    obterPersonagens,
    cadastrarPersonagens
}