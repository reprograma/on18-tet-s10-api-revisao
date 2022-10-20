const db = require("../models/db")

const get = async (req, res) => {
    const characters = await db("characters")
    if (characters.length == 0) return res.status(200).send([])

    const query = req.query
    if (Object.keys(query).length == 0) return res.status(200).send(characters)

    let filtered = []

    for (const character of characters) {
        const keys = Object.keys(character)
        for (const key of keys) {
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


const getId = async(req, res) => {
    const characters = await db("characters")
    const { id } = req.params
    
    const character = characters.find(character => character.id == id)
    
    if (!character) return res.status(404).send({
        message: `Id: ${id} - Not Found`
    })

    res.status(200).send(character)
}

const post = async(req, res) => {
    const characters = await db("characters")
    
    const {
        nome, idade, genero, corOlho, email
    } = req.body

    if (isNaN(idade) || idade <= 0) {
        return res.status(400).send({ message: "Invalid age"})
    }

    if (!nome || !genero || !corOlho || !email) {
        return res.status(400).send({ message: "All fields required"})
    }

    const newChar = {
        id: characters.length + 1,
        nome, idade, genero, corOlho, email
    }

    characters.push(newChar)

    res.status(201).send(newChar)
}

const patch = async(req, res) => {
    const characters = await db("characters")
    const { id } = req.params
    const {
        nome, idade, genero, corOlho, email
    } = req.body

    if (isNaN(idade) || idade <= 0) {
        return res.status(400).send({ message: "Invalid age"})
    }
    
    const character = characters.find(character => character.id == id)
    
    if (!character) return res.status(404).send({
        message: `Id: ${id} - Not Found`
    })

    if (nome) character["nome"] = nome
    if (idade) character["idade"] = idade
    if (genero) character["genero"] = genero
    if (corOlho) character["corOlho"] = corOlho
    if (email) character["email"] = email
    
    res.status(200).send(character)
}

const remove = async(req, res) => {
    const characters = await db("characters")
    const { id } = req.params

    const character = characters.find(character => character.id == id)
    
    if (!character) return res.status(404).send({
        message: `Id: ${id} - Not Found`
    })

    characters.splice(characters.indexOf(character), 1)

    res.status(200).send(characters)
}

module.exports = {
    get, getId, post, patch, remove
}