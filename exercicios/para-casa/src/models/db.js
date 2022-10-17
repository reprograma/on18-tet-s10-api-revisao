const db = (desenho) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(desenho == "meninas-super-poderosas"){
                return resolve(require("./MeninasSuperPoderosasModel.json"))
            }
            return reject(new Error(`Não existe o desenho ${desenho} no nosso catálogo`))
        },1500)
    })

}
module.exports = db 