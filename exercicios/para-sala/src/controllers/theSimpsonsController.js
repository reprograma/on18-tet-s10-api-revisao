const db = require("../models/db")

const obterPersonagens = async (request, response) => {

    const personagens = await db("the-simpsons")
    
    const parametros = request.query
    if(!parametros) return response.status(200).send(personagens)
    
    const filtrado = []
    /*porque uma array [] vazia? tipo um carrinho de comprar vazio,
    onde mais la na frente vou adicionar produtos // será filtrada pelos laços, 
    pelo laço receberá personagens filtrados */

    for (const personagem of personagens){
        const keys = Object.keys(personagem)
        
        for (const chave of chaves){
            // if(personagem[chave].toString().includes(parametros[chaves]))
            const personagemDado = personagem[chave].toString()
            const buscaDado = parametros[chaves] && parametros[chave].toLowerCase()
            if(personagemDado.includes(buscaDado))//criei as const acima para diminui o if//
                {filtrado.push(personagem)}
    }
    if(filtrado.length === 0){}
     response.status(200).send(personagens)
}
}
const cadastrarPersonagem = async(request, response) => {
    let personagens = await db("the-simpsons")

    const {
     nome, idade, bio, genero, profissao
    } = request.body
 
    //regras de negocio
    if (!nome || nome.trim() === "") {
      return response.status(400).send({ message: "O nome é obrigatorio"})
    }
 
    if (isNaN(idade) || idade <= 0) {
     return response.status(400).send({ message: "A idade é obrigaria"})
    }
 
    const nomeExiste = personagens.some(personagem => personagem.nome === nome)
 
    if (nomeExiste === true) {
     return response.status(409).send({ message: `O nome ${nome} já existe`})
    }
 
    // a gente construi o personagem
    const novoPersonagem = {
     id: personagens.length,
      nome, idade, genero, profissao, bio 
    }

    personagens.push(novoPersonagem)
 
    response.status(201).send(novoPersonagem)
}

module.exports = {
    obterPersonagens,
    cadastrarPersonagem
}