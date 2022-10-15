const { request, response } = require("../app");
const db = require("../models/db");

const getCharacter = async(request, response) => {
    const characters = await db("gundam");
    response.status(200).send(characters);
};

const insertCharacter = async(request, response) => {
    const characters = await db("gundam");
    //nome e idade são obrigatorios

    const {
        nome, idade, bio, genero, profissao
    } = request.body;

    //regras de negocio
if (!nome || nome.trim() === "") {
    return response.status(400).send({ menssage: `O nome é obrigatório!`});
}

if (idade<0 || isNaN(idade)) {
    return response.status(400).send({ menssage: `A idade é obrigatória!`});
}

    const existingName = characters.some(characters => characters.nome === nome);

    if(existingName===true){
        return response.status(409).send({ menssage: `o nome ${nome} ja existe`});
    }

    // a gente constroi o character
    const newCharacter = {
        nome, idade, genero, profissao, bio,
        id: characters.length
    };

    characters.push(newCharacter);

    console.log(newCharacter);

    response.status(201).send(newCharacter);

}
module.exports = {
    getCharacter,
    insertCharacter
};