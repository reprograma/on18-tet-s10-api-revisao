const db = require("../models/db");

const getCharacters = async (request, response) => {
    const character = await db("mha");
}



module.exports = {
    getCharacters
  }