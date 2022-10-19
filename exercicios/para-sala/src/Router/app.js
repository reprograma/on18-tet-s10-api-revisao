const express=require('express')
const theSimpsonsRoutes=require('./theSimpsonsRouters')


const app=express()

app.use(express.json())
app.use('/animes', theSimpsonsRoutes)


module.exports=app