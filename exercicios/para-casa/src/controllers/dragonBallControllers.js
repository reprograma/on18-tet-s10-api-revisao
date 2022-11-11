const db = require("../models/db")

const obterPersonagens = async (request, response) => {

   const personagens = await db("dragon-ball")
   if (personagens.length === 0) return response.status(200).send([])

   const parametros = request.query
   console.log(parametros) 
    
   if (Object.keys(parametros).length == 0) return response.status(200).send(personagens)
  
   const filtrado = []
   
   for (const personagem of personagens) {
     const chaves = Object.keys(personagem)
     
     for (const chave of chaves) {
       const personagemDado = personagem[chave].toString().toLowerCase()
       
       const buscaDado = parametros[chave] && parametros[chave].toLowerCase()
       console.log(personagemDado, buscaDado)
       
        if (personagemDado.includes(buscaDado)) {
          filtrado.push(personagem)
        }
     }
   }

   if (filtrado.length === 0) {
     return response.status(404).send({
      message: "Nenhum resultado para essa busca"
     })
   }

   response.status(200).send(filtrado)
}

const cadastrarPersonagem = async(request, response) => {
   const personagens = await db("dragon-ball")
   

   
   const {
    nome, especie, profissao , planeta, 
   } = request.body

   
   if (!nome || nome.trim() === "") {
     return response.status(400).send({ message: `O nome é obrigatorio` })
   }

   if (!especie || especie.trim() === "") {
    return response.status(400).send({ message: `A especie é obrigatoria` })
   }

   const nomeExiste = personagens.some(personagem => personagem.nome === nome)

   if (nomeExiste === true) {
    return response.status(409).send({ message: `O nome ${nome} já existe`})
   }

  
   const novoPersonagem = {
    id: personagens.length,
    nome, especie, profissao , planeta, 
   }

   personagens.push(novoPersonagem)

   response.status(201).send(novoPersonagem)
}

const obterPersonagemPorId = async(request, response) =>{
  const { id } = request.params
  const personagens = await db("dragon-ball")

  const personagemEncontrado = personagens.find(personagem => personagem.id == id)

  if (!personagemEncontrado) return response.status(404).send({
    message: `Nenhum personagem encontrado para esse id ${id}`
  })

  response.status(200).send(personagemEncontrado)
}

const atualizarPersonagem = async(request, response) => {
    
    const { id } = request.params
    const personagens = await db("dragon-dragon")
    const personagem = personagens.find(personagem => personagem.id == id)

    if (!personagem) {
      return response.status(404).send({ 
        message: `Personagem com o ${id} não encontrado!`
      })
    }

    const {nome, especie, profissao , planeta } = request.body
    

    if (typeof nome != "string" || nome.trim() == "") return response.status(400).send({ 
      message: "O nome não pode ser vazio"
    })

      
    if (nome) personagem.nome = nome
    if (especie) personagem.especie = especie
    if (profissao) personagem.profissao = profissao
    if (planeta) personagem.planeta = planeta

    response.status(200).send(personagem)
}

const deletarPersonagem = async(request, response) => {
  
   const personagens = await db("dragon-ball")
   const { id } = request.params



   const personagenIndice =  personagens
   .findIndex(personagem => personagem.id == id)

   console.log(personagenIndice)
   
   if (personagenIndice === -1) {
     return response.status(404).send(
      { message: `Personagem não existe para o ${id}`}
      )
   }
   personagens.splice(personagenIndice, 1)

   response.status(200).send({
    message: "Personagem deletado com sucesso!"
   })
}

module.exports = {
  obterPersonagemPorId,
  obterPersonagens,
  cadastrarPersonagem,
  atualizarPersonagem,
  deletarPersonagem
}