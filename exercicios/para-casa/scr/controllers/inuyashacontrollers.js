const { response } = require("express")
const { request } = require("../app")

const bd = require("../models/bd")


const catalogo = async(request, response)=>{
    const personagens = await bd("inuyasha")

    const catalagoPersonagens = request.params 

    response.status(200).send(personagens)


}



const getById = async(request, response) =>{
    
        let animeId = await bd()
        let idRequest = request.params.id

        let idEncontrado = animeId.find(anime => anime.id == idRequest)

        
        if( idEncontrado == undefined) throw new Error("Personagem não encontrado!")

        response.status(200).send(idEncontrado)        
    }

    const cadrastarPersonagem = async(request, response) =>{
        let personagem = await bd()

        const {nome, idade, genero, bio}= request.body
        
        if(!nome|| nome.trim() === ""){
            return response.status(400).send({message: `O nome é obrigatorio`})
            
        }

        if (isNaN(idade) || idade <= 0) {
            return response.status(400).send({ message: `A idade é obrigaria` })
        }

           const nomeExiste = personagem.some(personages => personages.nome === nome)

        if (nomeExiste === true) {
            return response.status(409).send({ message: `O nome ${nome} já existe`})
        }  

         const novoPersonagem ={ id: personagem.length, nome, idade, genero, bio}
         
         personagem.push(novoPersonagem)

         response.status(201).send(novoPersonagem)


    }
    
    const deletarPersonagem = async(request, response)=>{
        const personagens = await bd()
        const idRequest = request.params.id
        const indiceEncontrado = personagens.findIndex(personagem => personagem.id == idRequest)
        
        if (indiceEncontrado === -1){
            return response.status(404).send({
                message: `Personagem não existe para o ${id}`
            })
        }

        personagens.splice(indiceEncontrado, 1) 

        response.status(204).send({
            message: "Personagem deletado com sucesso!"
        })

    }

    const atualizar = async(request, response)=>{
        const personagens = await bd()
        const {id} = request.params
        const atualizarPersonagem = personagens.find(personagem =>personagem.id == id)
        
        if(!atualizarPersonagem){
            return response.status(204).send({
                message: `Personagem com o ${id} não encontrado!`
            })
        }

        const {nome, bio, genero, idade}= request.body

     if (typeof nome != "string" || nome.trim() == "") return response.status(400).send({ 
      message: "O nome não pode ser vazio"
     })

     if( typeof idade != "number"|| idade < 0){
        return response.status(400).send("A idade precisa ser um numero")
     }

     if (nome) atualizarPersonagem.nome = nome
    if (idade) atualizarPersonagem.idade = idade
    if (bio) atualizarPersonagem.bio = bio
    if (genero) atualizarPersonagem.genero = genero

    response.status(204).send(atualizarPersonagem)   

    }

    
const getTitle = async(request, response) =>{

        let animeTitle = await bd()
        let titleRequest = request.query.title.toLowerCase()

        let buscarPorTitulo = animeTitle.filter(personagem => personagem.Title.toLowerCase().includes(titleRequest))

        
        if(!buscarPorTitulo){
            return response.status(204).send({
                message: `Personagem com o ${titleRequest} não encontrado!`
            })
        }

    
        response.status(200).send(buscarPorTitulo)

    
        response.status(404).json({message: error.message})
        
    
}

    








module.exports = {
    catalogo,
    getById,
    cadrastarPersonagem,
    deletarPersonagem,
    atualizar,
    getTitle
     
}
