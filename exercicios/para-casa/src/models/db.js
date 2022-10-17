const db = (seriado) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            if(seriado === "chaves"){
                return resolve(require("./chavesModel.json"))
            }
            return reject(new Error(`Não existe o seriado ${seriado} no nosso catálogo.`))
        },1500)
    })
}
module.exports = db