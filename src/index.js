const express=require('express')
require('dotenv').config()
//const {CityRepository}=require('./repository/cityRepository')
const apiRoutes=require('./routes/index')
const serverConfig=require('./config/serverConfig')
const {City,Airport}=require('./models/index')
const { where } = require('sequelize')
const { raw } = require('mysql2')
const setupServer = async ()=>{
    const app=express();
    const PORT=serverConfig.PORT;
    
    app.use(express.json());
    app.use('/api',apiRoutes);
    app.listen(PORT,async ()=>{
        console.log(`Server up at port ${serverConfig.PORT}`);
        
    })
}

setupServer()