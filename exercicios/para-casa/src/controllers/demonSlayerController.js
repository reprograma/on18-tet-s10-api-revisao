const db = require("../models/db");

const getCharacters = async(request, response) => {
    const characters = await db("demon-slayer");
    if (characters.length === 0) return response.status(204).send([]);
    const params = request.query;
    if (Object.keys(params).length == 0)
        return response.status(200).send(characters);
    const filtered = [];

    for (const character of characters) {
        const keys = Object.keys(character);
        for (const key of keys) {
            const characterData = character[key].toString().toLowerCase();
            const searchData = params[key] && params[key].toLowerCase();
            if (characterData.includes(searchData)) {
                filtered.push(character);
            }
        }
    }
    if (filtered.length === 0) {
        return response.status(404).send({ message: `Request not found` });
    }

    response.status(200).send(filtered);
};

const registerCharacter = async(request, response) => {
    const character = await db("demon-slayer");
    const { name, age, bio, gender, occupation } = request.body;
    if (!name || name.trim() === "") {
        return response.status(400).send({
            message: `invalid name`,
        });
    }
    if (age < 0) {
        return response.status(400).send({ message: `This is a mandatory field` });
    }

    const existingName = character.some((character) => character.name === name);
    if (existingName === true) {
        return response
            .status(409)
            .send({ message: `The name ${name} is already on database ` });
    }

    const newCharacter = {
        id: character.length,
        name,
        gender,
        occupation,
        age,
        bio,
    };

    character.push(newCharacter);
    response.status(201).send(newCharacter);
};

const getCharacterById = async(request, response) => {
    const { id } = request.params;
    const characters = await db("demon-slayer");
    const characterFound = characters.find((character) => character.id == id);
    if (!characterFound)
        return response.status(404).send({ message: `Id Not found ${id}` });
    response.status(200).send(characterFound);
};

const updateCharacter = async(request, response) => {
    const { id } = request.params;
    const characters = await db("demon-slayer");
    const character = characters.find((character) => character.id == id);
    if (!character) {
        return response.status(404).send({
            message: `Character not found by selected ${id}`,
        });
    }
    const { name, gender, occupation, age, bio } = request.body;
    if (typeof name != "string" || name.trim() == "")
        return response.status(400).send({ message: "name is a mandatory field" });
    if (typeof age != "number" || age < 0) {
        return response.status(400).send("Age must be a number");
    }

    if (name) character.name = name;
    if (gender) character.gender = gender;
    if (occupation) character.occupation = occupation;
    if (age) character.age = age;
    if (bio) character.bio = bio;

    response.status(200).send(character);
};

const deleteCharacter = async(request, response) => {
    const characters = await db("demon-slayer");
    const { id } = request.params;
    const characterIndex = characters.findIndex(
        (character) => character.id == id
    );

    if (characterIndex === -1) {
        return response
            .status(404)
            .send({ message: `Character not found by selected ${id}` });
    }

    characters.splice(characterIndex, 1);
    response.status(200).send({ message: "Character has been deleted" });
};

const updateAnything = async(request, response) => {
    let animes = await db("demon-slayer");
    const requestedId = request.params.id;
    const bodyRequest = request.body;
    const foundAnime = animes.find((anime) => anime.id == requestedId);
    bodyRequest.id = foundAnime.id;

    Object.keys(foundAnime).forEach((key) => {
        if (bodyRequest[key] == undefined) {
            foundAnime[key] = foundAnime[key];
        } else {
            foundAnime[key] = bodyRequest[key];
        }
    });
    response.status(200).json([{
        message: "Character updated",
        foundAnime,
    }, ]);
};

module.exports = {
    getCharacters,
    registerCharacter,
    getCharacterById,
    updateCharacter,
    deleteCharacter,
    updateAnything,
};