const db = (anime) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(anime === "meninas-Super-Poderosas") {
                return resolve(require("./meninasSuperPoderosasModels.json"))
            }
            return reject(new Error(`Não existe o anime ${anime} no nosso catálogo`))
        }, 1500)
    })
}

module.exports = db