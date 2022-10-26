
const db = require("../models/db")

const obterPersonagens = async (request, response) => {
    
    const personagens = await db("Dragon-Ball-Z")
    if (personagens.length == 0) return response.status(200).send([])

    const parametros = request.query
    console.log(parametros) 
     // caso o usario não tenha passado parametros, retormamos tudo.
    if (Object.keys(parametros).length == 0) return response.status(200).send(personagens)
    // a gente cria a lista que será filtrada, que pelo laço receberá os persoangens filtrados
    const personagemFiltrado = []
    // ele vai passar por cada personagem presente no nosso banco
    for (const personagem of personagens) {
      const chaves = Object.keys(personagem)
      // ele vai percorrer cada chave do personagem atual do laco
      for (const chave of chaves) {
        const personagemDado = personagem[chave].toString().toLowerCase()
        const buscarDados = parametros[chave] && parametros[chave].toLowerCase()
        console.log(personagemDado, buscarDados)
        // validar se o dado da chave do personagem atual corresponde ao parametro que foi recebido
         if (personagemDado.includes(buscarDados)) {
           personagemFiltrado.push(personagem)
         }
    }
}
    if (personagemFiltrado.length === 0) {
        response.status(404).send({
            message: "Desculpe, não encontramos nenhum resultado na busca!"
        })
    }
    response.status(200).send(personagemFiltrado)
}

const personagemPorId = async (request, response) => {
    const { id } = request.params
    const personagens = await db("Dragon-Ball-Z")

    const encontrarPersonagem = personagens.find(personagem => personagem.id == id)

    if (!encontrarPersonagem) return response.status(404).send({
        message: `Nenhum personagem encontrado para esse id ${id}`
    })

    response.status(200).send(encontrarPersonagem)
}

const cadastrarPersonagem = async (request, response) => {
    const personagens = await db("Dragon-Ball-Z")
    
    const {
        nome, idade, genero, Raça
    } = request.body

    if (!nome || nome.trim() === "") {
        return response.status(400).send({ message: `O nome é obrigatório!` })}

    if (!Raça || Raça.trim() === "") {
        return response.status(400).send({ message: `A Raça é obrigatório!` })}

    // SE EXISTIR UM PERSONGEM COM O MESMO NOME NAO DEIXAR PASSAR
    const nomeExiste = personagens.some(personagem => personagem.nome === nome)

    if(nomeExiste === true) {
        return response.status(400).send({ message: `O nome ${nome} já existe`})
    }

    const novoPersonagem = {
        id: personagens.length,
        nome, idade, genero, Raça
    }
    personagens.push(novoPersonagem)

    response.status(201).send(novoPersonagem)
}

const personagemAtualizado = async (request, response) => {
    try {
        const personagens = await db("Dragon-Ball-Z")

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

const deletaPersonagem = async (request, response) => {
    try {
        let personagens = await db("Dragon-Ball-Z")

        const solicitarId = request.params.id

        const deletarPersonagem = personagens.find(personagem => personagem.id == solicitarId )

        if (deletarPersonagem == undefined) throw new Error("id não encontrado")

        const index = personagens.indexOf(deletarPersonagem)

        personagens.splice(index, 1)

        response.status(204).send()

    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

module.exports = {
    obterPersonagens,
    cadastrarPersonagem,
    personagemPorId,
    personagemAtualizado,
    deletaPersonagem
}