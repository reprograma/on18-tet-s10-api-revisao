const db = (anime) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (anime === "onePiece"){
                return resolve(require("./onePieceModel.json"))
            }
            return reject(new Error(`Não existe esse ${anime} em nossa lista.`))
        }, 1500)
    })
}

module.exports = db