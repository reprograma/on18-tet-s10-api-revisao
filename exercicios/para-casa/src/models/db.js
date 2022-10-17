const db = (cartoon) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cartoon === "shrek") {
                return resolve(require("./shrekModel.json"))
            }
            return reject(new Error(`O cartoon ${cartoon} não foi encontrado no nosso catálogo.`))
        }, 1500)
    })
}

module.exports = db