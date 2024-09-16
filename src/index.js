const express=require('express')
require('dotenv').config()

const serverConfig=require('./config/serverConfig')

const setupServer = async ()=>{
    const app=express();
    const PORT=serverConfig.PORT
    
    app.use(express.json())
    app.listen(PORT,()=>{
        console.log(`Server up at port ${serverConfig.PORT}`)
    })
}

setupServer()