const bd = (anime) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (anime == "inuyasha") {
          return resolve(require("./inuyasha.json"))
        }
        return reject(new error (`Não existe o anime ${anime} no nosso catálogo.`))
      }, 1500)
    })
  }
  



module.exports = bd