const db = (desenho) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(desennho === "bob-esponja"){
                return resolve(require('./bobEsponjaModels.json'))
            }
            return reject(new Error(`Não esxites o desenho ${desenho} no nosso catálogo`))
        })
    })
}

module.exports = db