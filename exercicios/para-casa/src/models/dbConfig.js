function bancoDeDados(dado){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (dado === "sailor-moon") {
                return resolve(require("./sailorMoon.json"))
            } 
            else{
                return reject (new Error(`Dado não encontrado`))
            }
            
        }, 1500);

    })
}

module.exports = {
    bancoDeDados
}