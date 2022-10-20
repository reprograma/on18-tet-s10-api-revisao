const db = (cartoon) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (cartoon === "Justice League") {
          return resolve(require("./justiceLeague.json"))
        }
        return reject(new Error(`Não existe o desenho ${cartoon} no nosso catálogo.`))
      }, 1500)
    })
  }
  
  module.exports = db