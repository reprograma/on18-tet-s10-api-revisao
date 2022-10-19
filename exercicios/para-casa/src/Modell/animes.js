const drawingDatabase = (drawing)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
             
                if(drawing==='The-Movie-BoJack-Horseman'){
                   
                    return resolve(require('./data.json'))
                    
                }
                return reject(new Error(`This movie ${drawing} doesn't exist in our catalog`))
                
        },500)
    })
}


module.exports=drawingDatabase