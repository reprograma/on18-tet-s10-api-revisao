function bancoDeDados(dado){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(dado == "cartoon"){
                return resolve(require("./simpsons.json"))
            }
            else{
                return reject("Dado não encontrado")
            }
            
        }, 1500);
    })
}

module.exports ={
    bancoDeDados
}