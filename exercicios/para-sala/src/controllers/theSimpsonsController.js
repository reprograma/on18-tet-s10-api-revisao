const { response } = require("../app")
const db = require ("../models/db")

const obterPersonagens = async (request, response) =>{
    const personagens = await db ("the-simpsons")
    response.status(200).send(personagens)
}
const cadastrarPersonagem = async(request,response) =>{
    const personagens = await db("the-simpsons")
    const {
        nome,idade,bio,genero,profissao,
    } = request.body
    const novoPersonagem = {
        nome,idade,bio,genero,profissao
    }
    console.log(novoPersonagem)
}

module.exports = {
    obterPersonagens,
    cadastrarPersonagem
}