const db = (anime)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (anime === "the-simpsons") {
                return resolve(require("./theSimpsonsModel.json"))
            }
            return reject (new Error(`Não existe o anime ${anime} no nosso catálogo.`))
        }, 1500)

    })
}

module.exports = db