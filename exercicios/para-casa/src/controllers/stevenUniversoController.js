// Importar o banco de dados
const db = require("../models/db")

// Criando o getAll
const obterPersonagens = async (request, response) => {
    const personagens = await db("steven-universo")

    if(personagens.length === 0) return response.status(200).send([])

    const parametros = request.query


    if(Object.keys(parametros).length == 0) return response.status(200).send(personagens)

    const filtrado = []


    for(const personagem of personagens) {
        const chaves = Object.keys(personagem)


        for(chave of chaves) {

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
    const personagens = await db("steven-universo")

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

    response.status(201).send(novoPersonagem)
}

const obterPersonagemPorId = async (request, response) => {
    const { id } = request.params
    const personagens = await db("steven-universo")

    const pesquisarId = personagens.find(personagem => personagem.id == id)

    if(!pesquisarId) return response.status(404).send({message: "Id do personagem não encontrado"})

    response.status(200).send(pesquisarId)
}

const atualizarPersonagem = async (request, response) => {
    const { id } = request.params
    const personagens = await db("steven-universo")

    const personagem = personagens.find(personagem => personagem.id == id)

    if(!personagem) {
        return response.status(404).send({
            message: `Personagem com id ${id} não encontrado.`
        })
    }

    const { nome, idade, especie, gem } = request.body

    if(typeof nome != "string" || nome.trim() == "") return response.status(400)({
        message: "O nome não pode ser vazio"
    })

    if(typeof idade != "number" || idade < 0) {
        return response.status(400).send("A idade precisa ser um número")
    }

    const nomeExiste = personagens.some(personagem => personagem.id != id && personagem.nome == nome)

    if(nomeExiste == true) {
        return response.status(409).send({message: `O nome ${nome} já existe.`})
    }

    if (nome) personagem.nome = nome
    if (idade) personagem.idade = idade
    if (especie) personagem.especie = especie
    if (gem) personagem.gem = gem

    response.status(204).send(personagem)
}

const deletarPersonagem = async (request, response) => {
    const { id } = request.params
    const personagens = await db("steven-universo")

    const personagemIndice = personagens.findIndex(personagem => personagem.id == id)

    if(personagemIndice === -1) {
        return response.status(404).send({message: `Personagem não existe.`})
    }

    personagens.splice(personagemIndice, 1)

    response.status(204).send({message: "Personagem deletado com sucesso!"})

}

// Exportar o getAll
module.exports = {
    obterPersonagens,
    cadastrarPersonagem,
    obterPersonagemPorId,
    atualizarPersonagem,
    deletarPersonagem
}
