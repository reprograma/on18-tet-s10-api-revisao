const bancoDeDados = (reality) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (reality === "drag-race") {
                return resolve(require("./dragRace.json"))
            }
            return reject(new Error(`Não existe o reality ${reality} no nosso catálogo.`))
        }, 1500)
    })
}

module.exports = bancoDeDados