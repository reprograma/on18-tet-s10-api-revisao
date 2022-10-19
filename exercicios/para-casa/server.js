
const app=require('./src/app')

const port=8085 || process.env.PORT

app.listen(port, ()=>{
    console.log('deu certo')
})