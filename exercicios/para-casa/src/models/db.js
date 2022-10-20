const db = (model = "characters") => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (model === "characters") {
                return resolve(require("./characters.json"))
            }
            return reject(new Error(`Modelo: ${model} - não encontrado.`))
        }, 1500)
    })
}

module.exports = db