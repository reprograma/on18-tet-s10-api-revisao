const db = (anime) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(anime === "Dragon-Ball-Z") {
                return resolve(require("./DragonBallZModel.json"))
            }
            return reject(new Error(`Anime não existente ${anime} em nosso catálogo.`))
        }, 1500)
    })
}

module.exports = db