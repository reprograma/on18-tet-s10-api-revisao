const db = (desenho) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (desenho === "bob-esponja") {
                return resolve(require("./bobEsponjaModel.json"))
            }
            return reject(new Error(`O desenho ${desenho} não foi encontrado no nosso catálogo.`))
        }, 1500)
    })
}

module.exports = db