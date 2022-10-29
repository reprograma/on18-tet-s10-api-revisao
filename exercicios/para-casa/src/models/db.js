const db = (anime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (anime === "meninas-poderosas") {
        return resolve(require("./meninasSuperPoderosasModel.json"))
      }
        return reject(new Error(`Não existe o anime ${anime} no nosso catálogo.`))
      }, 1500)
    })
  }
  
  
module.exports = db