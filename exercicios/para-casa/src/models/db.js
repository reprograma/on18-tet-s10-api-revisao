const db = (anime) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (anime === "mob-psycho") {
          return resolve(require("./personagens.json"))
        }
        return reject(new Error(`Não existe o anime ${anime} no nosso catálogo.`))
      }, 500)
    })
  }
  
  module.exports = db