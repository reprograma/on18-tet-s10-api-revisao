const db = (cartoon) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cartoon === "steven-universo") {
                return resolve(require("./stevenUniversoModel.json"))
            }
            return reject(new Error(`Não existe o anime ${cartoon} no nosso catálogo.`))
        }, 1500);
    })
}

module.exports = db