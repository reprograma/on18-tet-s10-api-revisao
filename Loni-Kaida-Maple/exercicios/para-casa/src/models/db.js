const db = (anime) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(anime === "mha"){
                return resolve(require("./boku-no-hero-academia.json"))
            }
            return reject(new Error(`Não existe o anime ${anime} no nosso banco de dados`))
        }, 1500)
    })
}

module.exports = db;