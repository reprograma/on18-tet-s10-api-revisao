// Importar o banco de dados
const db = require("../models/db")

// Criando o getAll
const obterPersonagens = async (request, response) => {
    const personagens = await db("the-simpsons")

    if(personagens.length === 0) return response.status(200).send([])

    const parametros = request.query

    // Caso o usuário não tenha passado parâmetros, retorna tudo
    if(Object.keys(parametros).length == 0) return response.status(200).send(personagens)
    //criar lista que será filtrada, que pelo laço receberá os personagens filtrados
    const filtrado = []

    // o for vai passar por cada personagem presente no banco de dados
    for(const personagem of personagens) {
        const chaves = Object.keys(personagem)

        // esse for irá percorrer cada chave do personagem atual do laço
        for(chave of chaves) {
            //validar o dado da chave do personagem atual que corresponde ao parametros que foi recebido
            const personagemDado = personagem[chave].toString().toLowerCase()
            const buscaDado = parametros[chave] && parametros[chave].toLowerCase()

            if(personagemDado.includes(buscaDado)){
                filtrado.push(personagem)
            }
        }
    }

    if(filtrado.length == 0) {
        return response.status(404).send({message: "Nenhum resultado para essa busca"})
    }

    response.status(200).send(filtrado)
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

const obterPersonagemPorId = async (request, response) => {
    const { id } = request.parametros
    const personagens = await db("the-simpsons")

    const pesquisarId = personagens.find(personagem => personagem.id == id)

    if(!pesquisarId) return response.status(404).send({message: "Id do personagem não encontrado"})

    response.status(200).send(pesquisarId)
}

// Exportar o getAll
module.exports = {
    obterPersonagens,
    cadastrarPersonagem,
    obterPersonagemPorId
}