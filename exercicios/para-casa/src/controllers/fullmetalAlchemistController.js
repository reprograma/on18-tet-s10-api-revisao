const db = require("../models/db")


// prof. achei massa fazer esse exercício com  com os dois for e if, porque antes a Analu ensinou a usar o RegExp, mas acho que ficou ainda mais complicasdo. Usar os for e os ifs, ficou mais visual. Vou treinar mais vezes, pois preciso pegar bem essa parte. Fiz antes de rever os vídeos de revisão e de resolução. 


const getAll = async(request, response) => {
    const personagens = await db("fullmetal-alchemist")
    const parametros = request.query

    if(personagens.length === 0) {
        return response.status(200).send([])
    }

    if(Object.keys(parametros).length == 0)  return response.status(200).send(personagens)

    const filtrado = []

    for(const personagem of personagens) {
        const chaves = Object.keys(personagem)

        for(const chave of chaves) {

            const personagemDado = personagem[chave].toString().toLowerCase()

            const buscaDado = parametros[chave] && parametros[chave].toLowerCase()

            if(personagemDado.includes(buscaDado)) {
                filtrado.push(personagem)
            }
        }

    }

    if(filtrado.length === 0) {
        return response.status(404).send({ message: "Nenhum resultado para essa busca"})
    }

    response.status(200).send(filtrado)
}

const postNew = async (request, response) => {
    const personagens = await db("fullmetal-alchemist")
    const {nome, idade, bio} = request.body
    

   if(!nome || nome.trim() === "") {
    return response.status(400).send({messagem: `O nome é obrigatório`})
   }

   if(isNaN(idade) || idade <= 0) {
    return response.status(400).send({message: `A idade é obrigatória!`})
   }


    let novoPersonagem = {
        id: (personagens.length)+1,
        nome, idade, bio
    }

    const nomeExiste = personagens.some(personagem => personagem.nome === nome) 

    if(nomeExiste === true) {
        return response.status(409).send({messagem: `O nome ${nome} já existe!`})
    }



    personagens.push(novoPersonagem)

    response.status(201).send({message: `Personagem cadastrado com sucesso`})

}



const putPersonagem = async (request, response) => {
    const personagens = await db("fullmetal-alchemist")
    const idRequest = request.params.id
    const bodyRequest = request.body

    const encontraPersonagem = personagens.find(personagem => personagem.id == idRequest)

    bodyRequest.id = encontraPersonagem.id

    const chaves = Object.keys(encontraPersonagem)

    chaves.forEach((chave) => {
        if(bodyRequest[chave] == undefined) {
            encontraPersonagem[chave] = encontraPersonagem[chave]
        } else {
            encontraPersonagem[chave] = bodyRequest[chave]
        }
    })

    response.status(204).send({ message: `Personagem atualizado`})


}




const getById = async (request, response) => {
    const personagens = await db("fullmetal-alchemist")
    const idRequest = request.params.id

    const encontraPersonagem = personagens.find(personagem => personagem.id == idRequest) 

    if(!encontraPersonagem) {
        return response.status(404).send({ message: `Nenhum personagem encontrado para esse id: ${idRequest}`})
    }

    response.status(200).send(encontraPersonagem)

}

const excludeById = async (request, response) => {

    const personagens = await db("fullmetal-alchemist")
    const idRequest = request.params.id

    const personagemEncontrado = personagens.find(personagem => personagem.id == idRequest)

    if(!personagemEncontrado) {
        return response.status(404).send({message: `Nenhum personagem encontrado para esse id: ${idRequest}`})
    }

    const indice = personagens.indexOf(personagemEncontrado)

    personagens.splice(indice, 1)

    response.status(204).send({ message: "Personagem deletado com sucesso" })

}



module.exports = {
    getAll,
    postNew,
    putPersonagem,
    getById, 
    excludeById
}


