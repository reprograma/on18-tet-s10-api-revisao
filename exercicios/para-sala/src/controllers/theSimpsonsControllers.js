const { request, response } = require("express")
const db = require("../model/db")

const obterPersonagens = async (request, response) => {
    const personagens = await db("the-simpsons")

    const parametro = request.query


// Caso o usuário não passe nenhum parâmetro, retornamos tudo
    if(Object.keys(parametro).length == 0){
      return response.status(200).send(personagens)
    }

//criação da lista que será filtrada a partir dos parâmetros que o client enviar 

const filtrado = []

//Esse for vai passar por cada personagem presente no nosso banco
    for (const personagem of personagens){
      const chaves = Object.keys(personagem)

// Esse for vai percorrer cada chave do personagem atual do laço de loop 
      for (chave of chaves){     
        const personagemDado = personagem[chave].toString().toLowerCase()
        const buscaDado = parametro[chave] && parametro[chave].toLowerCase()

//Esse if vai validar se o dado da chave do personagem atual, correspondeao parametro que foi recebido 
        if (personagemDado.includes(buscaDado)){
          filtrado.push(personagem)
        }
      }
    }

    if(filtrado.length === 0){
      return response.status(404).send({ message: "Dado não existe no catálogo"})
    }
    response.status(200).send(filtrado)
}

const cadastrarPersonagem = async (request, response)=>{
  const personagens = await db("the-simpsons")

  //Desestruturação = recurso que permite a extração de propriedades (como variáveis) de um objeto no javaScript  
  const {
    nome, idade, genero, profissao, bio
} = request.body

if (!nome || nome.trim() === "") {
  return response.status(400).send({ message: `O nome é obrigatório`})
}

if (!idade || isNaN(idade) || typeof(idade) != "number" || idade <= 0) {
  return response.status(400).send({message: `A idade é obrigatória`})
}

const nomeExiste = personagens.some(personagem => personagem.nome === nome)

if (nomeExiste=== true){
  return response.status(409).send({message: `O ${nome} já existe`})
}

  const novoPersonagem = {
    id: personagens.length,
    nome, idade, genero, profissao,bio
    
}
 personagens.push(novoPersonagem)
 response.status(201).send(novoPersonagem)
}

const obterPersonagemPorId  = async(request, response) =>{
  const { id } = request.params
  const personagens = await db("the-simpsons")

  const personagemEncontrado = personagens.find(personagem => personagem.id == id)

if(!personagemEncontrado) {
  return response.status(404).send({
      message: "Personagem não encontrado com esse id"
  }) 
} 
response.status(200).send(personagemEncontrado) 
}

const atualizarPersonagem = async(request, response)=>{
 const personagem = await db("the-simpsons")
  const { id } = request.params

  const personagemEncontrado = personagem.find(personagem => personagem.id == id)
 

  const { nome, idade,genero, profissao, bio } = request.body

  if(!personagemEncontrado){
    return response.status(404).send({
      message: `Personagem com o ${id} não foi encontrado`
    })
  }

if (typeof nome != "string" || nome.trim() == "") return response.status(400).send({
  message: "O nome não pode ser vazio, é obrigatório"
})
 
if (!idade || isNaN(idade) || typeof(idade) != "number" || idade <= 0) {
  return response.status(400).send({message: `A idade é obrigatória`})
}

  if (nome) personagemEncontrado.nome = nome
  if (idade) personagemEncontrado.idade = idade
  if (genero) personagemEncontrado.genero = genero
  if (profissao) personagemEncontrado.profissao = profissao
  if (bio) personagemEncontrado.bio = bio

  response.status(200).send(personagemEncontrado)
}

const deletarPersonagem = async (request, response)=>{
  const personagens = await db("the-simpsons")

  const { id }  = request.params 

  const personagensIndice = personagens.findIndex(personagem => personagem.id == id)

  if(personagensIndice === -1){
    return response.status(404).send({ message: `Personagem não existe para o ${id}`})
  }
  
  personagens.splice(personagensIndice, 1)
  
  response.status(204).send({
    message: "Personagem deletado com sucesso"
  })
}

module.exports = {
    obterPersonagens,
    obterPersonagemPorId,
    cadastrarPersonagem,
    atualizarPersonagem,
    deletarPersonagem
}