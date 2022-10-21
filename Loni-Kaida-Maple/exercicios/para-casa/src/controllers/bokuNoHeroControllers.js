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



module.exports = {
    getCharacters
  }