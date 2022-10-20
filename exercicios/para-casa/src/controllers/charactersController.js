const db = require("../models/db")

const get = async (req, res) => {
    const characters = await db("characters")
    if (characters.length == 0) return res.status(200).send([])

    const query = req.query
    if (Object.keys(query).length == 0) return res.status(200).send(characters)

    let filtered = []

    for (const character of characters) {
        const keys = Object.keys(characters)
        for (const key of keys) {
            console.log(character, key)
            const actualCharacter = character[key].toString().toLowerCase()
            const actualQuery = query[key] && query[key].toLowerCase()
            if (actualCharacter.includes(actualQuery)) {
                filtered.push(character)
            }
        }
    }

    if (filtered.length == 0) {
        return res.status(404).send({
            message: "No results for this query"
        })
    }

    res.status(200).send(filtered)
}

const post = async(req, res) => {
    const characters = await db("characters")
    
    const {
        nome, idade, genero, corOlho, email
    } = req.body

    if (isNaN(idade) || idade <= 0) {
        return res.status(400).send({ message: "Idade inválida"})
    }

    const newChar = {
        id: personagens.length + 1,
        nome, idade, genero, corOlho, email
    }

    characters.push(newChar)

    res.status(201).send(newChar)
}

const getId = async(req, res) => {
    const characters = await db("characters")
    const { id } = req.params

    const character = characters.find(character => character.id == id)

    if (!character) return res.status(404).send({
        message: `Id: ${id} - Not Found`
    })

    res.status(200).send(character)
}

module.exports = {
    get, getId, post
}