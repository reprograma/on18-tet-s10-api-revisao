const db = (desenho) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (desenho === "the-chaves") {
          return resolve(require("./theChavesModel.json"))
        }
        return reject(new Error(`Não existe o desenho animado ${desenho} no nosso catálogo.`))
      }, 1500)
    })
  }
  
  module.exports = db