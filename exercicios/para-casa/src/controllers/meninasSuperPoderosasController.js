const db = require("../models/db")

const obterPersonagens  = async (request, response) => {

    const personagens = await db("meninas-Super-Poderosas")

    response.status(200).send(personagens)
}


module.exports = {
    obterPersonagens
}