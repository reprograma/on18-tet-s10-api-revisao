const db = (pokemon) => {
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            if (pokemon ==="starter"){
                return resolve(require("./starterPokemonModel.json"))
            }
            return reject(new Error(`${pokemon} não encontrado no banco de dados`))
        }, 1500);
    })
}
module.exports = db