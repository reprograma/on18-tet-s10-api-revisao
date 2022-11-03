const db = (anime) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(anime === "fullmetal-alchemist") {
                return resolve(require("./fullmetalAlchemist.json"))
            }

            return reject (new Error(`Não existe o ${anime} no nosso catálogo.`))
        }, 1500)
    })

}

module.exports = db

