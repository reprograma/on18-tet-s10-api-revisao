// Importar o banco de dados
const db = require("../models/db")

// Criando o getAll
const obterPersonagens = async (request, response) => {
    const personagens = await db("the-simpsons")
    const parametros = request.query

    const filtrado = []

    for(const personagem of personagens) {

    }
    
    response.status(200).send(personagens)
}

const cadastrarPersonagem = async(request, response) => {
    const personagens = await db("the-simpsons")

    //nome e idade são obrigatórios
    // pega os dados que precisamos
    const {
        nome, idade, genero, profissao, bio
    } = request.body

    // regras de negócio: verificar se o dado que for adicionado não exista anteriormente

    if(!nome || nome.trim() == "") {
        response.status(400).send({
            message: `O nome é obrigatório`
        })
    }

    if(isNaN(idade) || idade <= 0) {
        response.status(400).send({
            message: `A idade é obrigatória`
        })
    }

    const nomeExiste = personagens.some(personagem => personagem.nome == nome)

    if(nomeExiste == true) {
        return response.status(409).send({message: `O nome ${nome} já existe.`})
    }

    //construir o personagem
    const novoPersonagem = {
        id: personagens.length,
        nome, idade, genero, profissao, bio
    }

    // empurrar novos dados para o banco de dados
    personagens.push(novoPersonagem)

    response.status(200).send(novoPersonagem)
}

// Exportar o getAll
module.exports = {
    obterPersonagens,
    cadastrarPersonagem
}