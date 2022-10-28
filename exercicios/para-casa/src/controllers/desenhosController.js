const db = require("../models/db");

async function dbConnect(){
    return await db("mob-psycho")
}

const getAll = async(request,response)=>{
    let personagens = await dbConnect()
    response.status(200).send(personagens)
}

const cadastro = async(request, response)=>{
    let personagens = await dbConnect()
    let dadosInsert = request.body

    let novoPersonagem = {
        "id": personagens.length +1,
        "nome": dadosInsert.nome,
        "genero": dadosInsert.genero,
        "profissao": dadosInsert.profissao
    }
    personagens.push(novoPersonagem);
    response.status(201).send({
        "Personagem cadastrado": novoPersonagem
    })
}

const deletar = async(request, response)=>{
    let personagens = await dbConnect();
    let dadosInsert = request.params.id;

    let personagemEncontrado = personagens.find(personagem=>
        personagem.id == dadosInsert)
    
    let localizacao = personagens.indexOf(personagemEncontrado)

    personagens.splice(localizacao,1)
    //Ver como faz pra mandar uma mensagem, quando o erro é 204
    response.status(204).json({
        "Personagem removido": personagemEncontrado
    })
}

let alteracao = async(request,response)=>{
    let personagens = await dbConnect();
    let personagemId = request.params.id;
    let personagemBody = request.body;

    let personagemEncontrado = personagens.find(personagem =>
        personagem.id == personagemId)
    
    let chaves = Object.keys(personagemEncontrado)

    personagemBody.id = personagemEncontrado.id

    chaves.forEach((chave)=>{
        if (personagemBody[chave] == undefined){
            personagemEncontrado[chave] = personagemEncontrado[chave]
        }else{
            personagemEncontrado[chave] = personagemBody[chave];
        }
    })

    response.status(204).json({
        "Título Alterado": personagemEncontrado
    })
}

module.exports = {
    getAll,
    cadastro,
    deletar,
    alteracao
}