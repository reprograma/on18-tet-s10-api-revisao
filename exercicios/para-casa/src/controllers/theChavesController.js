const db = require("../models/db")

const obterPersonagemPorId = async(request, response) =>{
    const { id } = request.params
    const personagens = await db("the-chaves")
  
    const personagemEncontrado = personagens.find(personagem => personagem.id == id)
  
    if (!personagemEncontrado) return response.status(404).send({
      message: `Nenhum personagem encontrado para esse id ${id}`
    })
  
    response.status(200).send(personagemEncontrado)
  }
  

const obterPersonagens = async (request, response) => {

    const personagens = await db("the-chaves")
    if (personagens.length === 0) return response.status(200).send([])
 
    const parametros = request.query
    console.log(parametros) 
     // caso o usario não tenha passado parametros, retormamos tudo.
    if (Object.keys(parametros).length == 0) return response.status(200).send(personagens)
    // a gente cria a lista que será filtrada, que pelo laço receberá os persoangens filtrados
    const filtrado = []
    // ele vai passar por cada personagem presente no nosso banco
    for (const personagem of personagens) {
      const chaves = Object.keys(personagem)
      // ele vai percorrer cada chave do personagem atual do laco
      for (const chave of chaves) {
        const personagemDado = personagem[chave].toString().toLowerCase()
        // aqui construimos o dado a partir da chave e transformamos em letras minusculas
        const buscaDado = parametros[chave] && parametros[chave].toLowerCase()
        console.log(personagemDado, buscaDado)
        // validar se o dado da chave do personagem atual corresponde ao parametro que foi recebido
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
    const personagens = await db("the-chaves")
    // nome e idade são obrigários
 
    // pega os dados que precisamos 
    const {
     nome,ator, idade, genero,moradia,bordoes, bio
    } = request.body
 
    // regras de negocio
    if (!nome || nome.trim() === "") {
      return response.status(400).send({ message: `O nome é obrigatorio` })
    }
 
    if (isNaN(idade) || idade <= 0) {
     return response.status(400).send({ message: `A idade é obrigaria` })
    }
 
    const nomeExiste = personagens.some(personagem => personagem.nome === nome)
 
    if (nomeExiste === true) {
     return response.status(409).send({ message: `O nome ${nome} já existe`})
    }
 
    // a gente construi o personagem
    const novoPersonagem = {
     id: personagens.length,
     nome,ator, idade, genero,moradia,bordoes, bio 
    }
 
    personagens.push(novoPersonagem)
 
    response.status(201).send(novoPersonagem)
 } 

 const atualizarPersonagem = async(request, response) => {
  // encontra-lo no banco pelo id
  // substituir pelo req.body
  const { id } = request.params
  const personagens = await db("the-chaves")
  const personagem = personagens.find(personagem => personagem.id == id)

  if (!personagem) {
    return response.status(404).send({ 
      message: `Personagem com o ${id} não encontrado!`
    })
  }

  const { nome,ator, idade, genero, moradia,bordoes,bio } = request.body
  // nome nao pode ser vazio, nome nao pode ser igual a já existente, idade precisa ser numero

  if (typeof nome != "string" || nome.trim() == "") return response.status(400).send({ 
    message: "O nome não pode ser vazio"
  })

  if (typeof idade != "number" || idade < 0) {
    return response.status(400).send("A idade precisa ser um numero")
  }
  
  if (nome) personagem.nome = nome
  if (ator) personagem.ator = ator
  if (idade) personagem.idade = idade
  if (genero) personagem.genero = genero
  if (genero) personagem.moradia = moradia
  if (bordoes) personagem.bordoes = bordoes
  if (bio) personagem.bio = bio

  response.status(200).send(personagem)
}

const deletarPersonagemPorId = async(request, response) => {
 // splice -> apagar atraves do indice
 // id -> para localizar o personagem
 // indexOf -> para localizar o que vai ser apagado
 const personagens = await db("the-chaves")
 const { id } = request.params

 // find -> ele encontra um elementro(personagen) no array e retorna
 // some -> ele econtra um personagem e retorna true | false 
 // findIndex -> ele encontra um indice no array de objetos(personagens)

 const personagenIndice =  personagens
 .findIndex(personagem => personagem.id == id)

 ///console.log(personagenIndice)
 
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
    deletarPersonagemPorId 


    
  }