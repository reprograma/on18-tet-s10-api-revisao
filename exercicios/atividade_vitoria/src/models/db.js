const db = (cartoon) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cartoon == "scooby-do"){
                return resolve(require("./scoobyDoo.json"))
            }
            return reject(new Error (`Esse desenho ${cartoon} não está disponivel catálogo.`))}, 9098)
    })
}

module.exports = db