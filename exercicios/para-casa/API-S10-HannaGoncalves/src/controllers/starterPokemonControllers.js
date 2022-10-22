const db = require("../models/db")

const testRoute =(request,response)=>{
    response.status(200).send({
        message: "Connected"
    })
}
const getPokemonById = async(request,response)=>{
    //puxa parametro do client como id
    const {id}=request.params
    //puxa db para variavel
    const pokemon = await db("starter")
    //busca o id no db
    const pokemonFound = pokemon.find(pokemon =>pokemon.id == id)
    //se não encontrar, erro
    if (!pokemonFound) return response.status(404).send({
        message: `No Pokemon found for id: ${id}`
    })
    //se encontrar, exibe
    response.status(200).send(pokemonFound)
}

const findPokemon = async(request,response)=>{
    //puxa db
    const pokemon = await db("starter")
    //erro caso o db esteja vazia ou conexão dê erro
    if (pokemon.length ==0) return response.status(200).send({message: "Banco de dados vazio"})
                //a lógica é sólida, porém em testes este erro nunca foi encontrado, acredito que fiz algo errado
    //puxa query para variavel
    const parameter = request.query
    //teste: se não houver query, exibe o db inteiro
    if (Object.keys(parameter).length==0) return response.status(200).send(pokemon)
    //a busca em si irá permitir busca em qualquer key do json
    //exemplo: pokemon/starter/name?=t
    //exibe todas as entries que possuem "t" em qualquer lugar do campo "name"
    //primeir se cria um array vazio que receberá os dados
    const filtered = []
    //agora o teste e busca
    for (const starter of pokemon){
        const keys = Object.keys(starter)
        for (const currentKey of keys){
            const pokemonData = starter[currentKey].toString().toLowerCase()
            const searchData = parameter[currentKey] && parameter[currentKey].toLowerCase()
            if (pokemonData.includes(searchData)){
                filtered.push(starter)
            }
        }
    }
    //erro caso não haja o dado no db
    if(filtered.length===0){
        return response.status(404).send({
            message: "Pokemon não encontrado"
        })
    }
//caso a busca tenha sucesso, exibe o resultado
response.status(200).send(filtered)
}

const addPokemon = async(request,response)=>{
    //puxa db para variavel
    const pokemon = await db("starter")
    //puxa os dados do body na request
    const {
        name, type, ability, hiddenAbility
    } = request.body
        //duas keys são obrigatórias: Name & Type
    if (!name || name.trim()===""){
        return response.status(400).send({message: "Name is a required field"})
    }
    if (!type || type.trim()===""){
        return response.status(400).send({message: "Type is a required field"})
    }
    //checar se há duplicidade
    const alreadyPresent = pokemon.some(pokemon =>pokemon.name ===name)
    if (alreadyPresent === true){
        return response.status(409).send({message: `${Name} already in the database`})
    }
    //construir a nova entrada do bd com as informações recebidas
    const newPokemon = {id: pokemon.length,name,type,ability,hiddenAbility}
    //adiciona o novo ao bd
    pokemon.push(newPokemon)
    response.status(201).send(newPokemon)
}

//exporta funções para uso externo
module.exports = {
    testRoute,
    getPokemonById,
    findPokemon,
    addPokemon
}