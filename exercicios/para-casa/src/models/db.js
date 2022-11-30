const db = (anime) => {
    return new Promise((resolve, reject) => {
setTimeout (() => {
    if(anime === "dragon-ball") {
        return resolve(require("./dragonBallModel.json"))
    }
    return reject(new Error(`Não existe o anime ${anime} no nosso catalogo.`))
}, 1500)
    })
}

module.exports = db