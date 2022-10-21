const db = (anime) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (anime === "dragon-ball") {
          return resolve(require("./dragon-ball.json"))
        }
        return reject(new Error(`Não existe o anime ${anime} em nosso catálogo.`))
      }, 1500)
    })
  }
  
  module.exports = db