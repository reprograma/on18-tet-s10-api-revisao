const db = (cartoon) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (cartoon === "hora-de-aventura"){
                return resolve(require("./horaDeAventuraModel.json"))
            }
            return reject(new Error(`Não existe o cartoon ${cartoon} no nosso catálogo`))
        }, 1500)
    })
}

module.exports = db