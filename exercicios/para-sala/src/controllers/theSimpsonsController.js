const db = require("../models/db")

const obterPersonagens = async (request, response) => {

   const personagens = await db("the-simpsons")

   response.status(200).send(personagens)
}

module.exports = {
  obterPersonagens
}