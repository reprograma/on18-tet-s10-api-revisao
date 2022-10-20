const db = require("../models/db")
/**
 * 
 * query -> parametros de consulta, fazer uma pesquisa ex: por nome,
 *  demilitar campos ex: trazer só o nome, 
 * paginacao: 10 items por request || 50 por request
 * params -> pode ser um id, um cpf, cpnj
 * query -> para pesquisa
 * params -> para dado que já existe
 */
const BuscarPersonagens = async (request, response) => {
   const personangensExistentes = await db("the-simpsons")
   if (personangensExistentes.length === 0) return response.status(200).send([])
   const parametros = request.query
      if (Object.keys(parametros).length == 0) return response.status(200).send(personagens)
     const filtrar = []
   
   for (const personagem of personagens) {
     const chaves = Object.keys(personagem)
   
     for (const chave of chaves) {
       const personagemDado = personagem[chave].toString().toLowerCase()
       const buscaDado = parametros[chave] && parametros[chave].toLowerCase()
       console.log(personagemDado, buscaDado)
        if (personagemDado.includes(buscaDado)) {
          filtrar.push(personagem)
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

const cadastrarPersonagem = async (request, response) => {
    const personagens = await db("liga-da-justica")
    const {nome,id,bio,fraqueza,poder}= request.body

    if (!nome||nome.trim() === "" ){
        return response.status(400).send({mensage: "O nome é obrigatório"})
    }

    if (isNaN(id) ||id <= 0){return response.status(400).send({message:"ID obrigatório"})}

    const nomeExistente = personagens.some(personagem => personagem.nome === nome)  
    if (nomeExiste === true) {
        return response.status(409).send({ message: `O nome ${nome} já existe`})
       }
       const novoPersonagem = {
        id: personagens.length,
        nome,id,bio,fraqueza,poder 
       }
       personagens.push(novoPersonagem)
       response.status(201).send(novoPersonagem)
}

const obterPersonagemPorId = async(request, response) =>{
    const { id } = request.params
    const personagens = await db("the-simpsons")
    const personagemEncontrado = personagens.find(personagem => personagem.id == id)
    if (!personagemEncontrado) return response.status(404).send({
      message: `Nenhum personagem encontrado para esse id ${id}`
    })
    response.status(200).send(personagemEncontrado)
  }

const atualizarPersonagem = async(request, response) => {
    const {id} = request.params
    const personagens = await db("A liga da Justiça")
    const personagem = personagens.find(personagem => personagem.id == id)

    if (!personagem) {
        return response.status(404).send({
            message:"Personagem com o ${id} não encontrado!"
        })
    }
    const {nome,bio,fraqueza,poder}= request.body
    if (typeof nome != "strring" || nome.trim() == "") return response.status(400).send({message:"O nome não pode ser vazio"})
    if (typeof bio != "number" || bio < 0) {
        return response.status(400).send("A idade precisa ser um numero")
      }
  
      if (nome) personagem.nome = nome
      if (fraqueza) personagem.fraqueza = idade
      if (bio) personagem.bio = bio
      if (poder) personagem.poder = genero
        
      response.status(200).send(personagem)
}


const deletarPersonagem = async(request, response) => {
   // splice -> apagar atraves do indice
   // id -> para localizar o personagem
   // indexOf -> para localizar o que vai ser apagado
   const personagens = await db("justiceLeague")
   const { id } = request.params

   // find -> ele encontra um elementro(personagen) no array e retorna
   // some -> ele econtra um personagem e retorna true | false 
   // findIndex -> ele encontra um indice no array de objetos(personagens)

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

 // - [ ] Ao criar deve retornar o status 201

// - [ ] Ao fazer qualquer leitura deve retornar o status 200



module.exports= {
cadastrarPersonagem,
BuscarPersonagens,
obterPersonagemPorId,
deletarPersonagem,
atualizarPersonagem,
}
