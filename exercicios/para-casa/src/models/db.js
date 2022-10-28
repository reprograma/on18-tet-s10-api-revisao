const db = (anime) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (anime === "death-note") {
          return resolve(require("./DeathNote.json"))
        }
        return reject(new Error(`Anime ${anime} não encontrado.`))
      }, 1500)
    })
  }
  
  module.exports = db