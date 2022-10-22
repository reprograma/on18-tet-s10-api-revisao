const db = require("../models/db");

const getCharacters = async (request, response) => {
    const characters = await db("mha");
    if(characters.lenght === 0) return response.status(200).send([])

    const param = request.query;
    console.log(param);


    if(Object.keys(param).length == 0) return response.status(200).send(characters);

    const filtered = [];

    for(const character of characters) {
        const keys = Object.keys(character);

        for(const key of keys) {
            const characterData = character[key].toString().toLowerCase();
            const searchData = param[key] && param[key].toLowerCase();
            console.log(characterData, searchData);
            if(characterData.includes(searchData)){
                filtered.push(character);
            }
        }
    }

    if (filtered.length === 0) {
        return response.status(404).send({
         message: "Not Found"
        })
      }
   
      response.status(200).send(filtered);
    
}

const getCharacterById = async(requet, response) => {
    const { id } = requet.params;
    const characters = await db("mha");
    const characterFound = characters.find(character => character.id == id);

    if(!characterFound) return response.status(404).send({
        message: `not found any character whith that id ${id}`
    })

    response.status(200).send(characterFound);

}

const insertCharacter = async(requet, response) => {
    const characters = await db("mha");
    const {
        nome, codenome, idade, genero, individualidade, descricao
    } = requet.body;

    if(!nome || nome.trim() === ""){
        return response.status(400).send({ message: `You need to insert a name!` });
    }
    if(!codenome || codenome.trim() === ""){
        return response.status(400).send({ message: `You need to insert a codename!` });
    }
    if(!individualidade || individualidade.trim() === ""){
        return response.status(400).send({ message: `You need to insert a quirq!` });
    }

    const existingName = character.some(character => character.nome === nome)

    if(existingName === true){
        return response.status(409).send({ message: `The name ${nome} already exist!`});
    }

    const newCharacter = {
        id: characters.length,
        nome, codenome, idade, genero, individualidade, descricao
    }

    characters.push(newCharacter);

    response.status(201).send(newCharacter);
}

const updateCharacter = async(request, response) => {
    const { id } = request.params;
    const characters = await db("mha");
    const character = characters.find(character => character.id == id);

    if(!character){
        return response.status(404).send({
            message: `Character with id ${id} not found!`
        })
    }

    const { nome, codenome, idade, genero, individualidade, descricao} = response.body;

    if(typeof nome != "string" || nome.trim() == "") return response.status(400).send({
        message: "insert a valid name!"
    })

    if(typeof codenome != "string" || codenome.trim() == "") return response.status(400).send({
        message: "insert a valid codename!"
    })

    if(typeof individualidade != "string" || individualidade.trim() == "") return response.status(400).send({
        message: "insert a valid quirq!"
    })

    if(nome) character.nome = nome;
    if(codenome) character.codenome = codenome;
    if(idade) character.idade = idade;
    if(genero) character.genero = genero;
    if(individualidade) character.individualidade = individualidade;
    if(descricao) character.descricao = descricao;

    response.status(204).send(character);
}


module.exports = {
    getCharacters,
    getCharacterById,
    insertCharacter,
    updateCharacter
  }