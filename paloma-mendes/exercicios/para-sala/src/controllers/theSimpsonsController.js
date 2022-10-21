const db = require("../models/db")

/*
query -> parametros de consulta, fazer uma pesquisa ex: por nome
    demilitar campos ex: trazer só o nome
    paginação -: 10 itens por que request || 50 por request
params -> pode ser um id, um cpf, cnpj
queru -> para pesquisa
params -> para dado que já existe
*/

const obterPersonagens = async (request, response) => {
    const personagens = await db("the-simpsons")
    if (personagens.length === 0) return response.status(200).send([])

    const parametros = request.query
    // caso o usuario não tenha passado parametros, retornamos tudo
    if (Object.keys (parametros).length == 0) return response.status(200).send(personagens)
    // criar a lista que será filtrada, que pelo laçi recebera os personagens filtrados
    const filtrado = []
    // primeiro for percorrerá cada personagem presente no db
    for (const personagem of personagens) {
        const chaves = Object.keys(personagem)
        // segundo for percorrer cada chave do personagem atual do laço
        for (const chave of chaves) {
            const personagemDado = personagem[chave].toString().toLowerCase()
            const buscaDado = parametros[chave] && parametros[chave].toLowerCase()
            //validar se o dado da chave do personagem atual corresponde ao parametro que foi recebido
            if (personagemDado.includes(buscaDado)) {
                filtrado.push(personagem)
            }
        }
    }
    
    if (filtrado.length === 0){
        return response.status(404).send({message: "Nenhum resultado encontrado"})
    }
    response.status(200).send(filtrado)
}

const cadastrarPersonagem = async (request, response) => {
    const personagens = await db("the-simpsons")

    // pegas os dados que precisamos
    const {
        nome, idade, genero, profissao, bio
    } = request.body

    const nomeExiste = personagens.some(personagem =>
        personagem.nome === nome)
    // regras de negocio    
    if (!nome || nome.trim() === "") {
        return response.status(400).send({ message: `O nome é obrigatório` })
    }

    if (isNaN(idade) || idade <= 0) {
        return response.status(400).send({ message: `Idade é obrigatória` })
    }
    if (nomeExiste === true) {
        return response.status(409).send({ message: `O nome ${nome} já existe` })
    }
    //nome e idade são obrigatórios
    // contruir o personagem
    const novoPersonagem = {
        nome, idade, genero, profissao, bio,
        id: personagens.length
    }

    personagens.push(novoPersonagem)

    response.status(201).send(novoPersonagem)
} 

const obterPersonagensPorId = async (request, response) => {
    const { id }= request.params
    const personagens = await db("the-simpsons")

    const personagemEncontradoPorId = personagens.find(personagem => personagem.id == id)

    if(!personagemEncontradoPorId) return response.status(404).send({message: `Nenhum personagem encontrado para esse ID ${id}`})

    response.status(200).send(personagemEncontradoPorId)
}


module.exports = {
    obterPersonagens,
    cadastrarPersonagem,
    obterPersonagensPorId
}