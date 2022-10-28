/* controller pratica uma ação*/

const db = require("../models/db")

const getPersonagens = async (request, response) => {

    const personagens = await db("death-note")
    response.status(200).send(personagens)
}  

const obterPersonagemPorId = async (request, response) => {
    const { id } = request.params
    const personagens = await db("death-note")

    const personagemEncontrado = personagens.find(personagem => personagem.id == id)

    if (!personagemEncontrado) return response.status(404).send({
        message: `Nenhum personagem encontrado para esse id ${id}`
    })

    response.status(200).send(personagemEncontrado)
}

const cadastrarPersonagem = async (request, response) => {
    let personagens = await db("death-note")

    const {
     nome, idade, bio, genero, profissao
    } = request.body

      const novoPersonagem = {
       id: personagens.length,
        nome, idade, genero, profissao, bio 
      }
      personagens.push(novoPersonagem)
   
      response.status(201).send({'Personagem cadastrado': novoPersonagem})
    }

    const atualizarPersonagem = async(request, response) => {
        const { id } = request.params
        const personagens = await db("death-note")
        const personagem = personagens.find(personagem => personagem.id == id)
    
        if (!personagem) {
          return response.status(404).send({ 
            message: `Personagem com o ${id} não encontrado!`
          })
        }

        const { nome, idade, bio, genero, profissao } = request.body
    
        if (nome) personagem.nome = nome
        if (idade) personagem.idade = idade
        if (bio) personagem.bio = bio
        if (genero) personagem.genero = genero
        if (profissao) personagem.profissao = profissao
    
        response.status(200).send(personagem)
    }
    
    const deletarPersonagem = async (request, response) => {
        const personagens = await db("death-note")
        const { id } = request.params
        const personagemIndice = personagens.findIndex(personagem => personagem.id == id)
        //findIndex -> encontra um indice da array de objetos (personagens)
        if(personagemIndice === -1) {
            return response.status(404).send({message: `Personagem não existe para o ${id}`}
            )
        }
        personagens.splice(personagemIndice, 1)
    
        response.status(200).send({
            message:"Personagem deletado!"
        })
    }
    
module.exports = {
    getPersonagens,
    obterPersonagemPorId,
    cadastrarPersonagem,
    atualizarPersonagem,
    deletarPersonagem
    }