const db = (desenho) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(desenho == "tres-espias-demais"){
                return resolve(require("./tresEspiasDemais.json"))
            }
            return reject(new Error (`Não existe o desenho ${desenho} no nosso catálogo.`))}, 1800)
    })
}

module.exports = db