const { where } = require('sequelize');
const {Airport, sequelize}=require('../models/index');
const { raw } = require('mysql2');

// In repo only we need to put the CRUD operations
class AirportRepository{

    async createAirport({name,cityId,address}){
        try{
            const airport=await Airport.create({name,cityId,address});
            return airport;
        }catch(error){
            throw {error}
        }
    }

    async getAirport(name){
        try{
            const airportInfo=await Airport.findOne({where:{name}});
            return airportInfo
        }catch(error){
            throw error;
        }
    }

    async updateAirport(airportId,updateParams){
        try{
            return await Airport.update(
                updateParams,
                {
                    where:{
                        id:airportId
                    }
                }
            )
        }catch(error){
            throw error;
        }
    }
    async deleteAirport(airportId){
        try{
            const response=await Airport.destroy({
                where:{
                    id:airportId
                }
            })
            return response;
        }catch(error){
            throw {error}
        }
    }

    async getAllAirportsInCity(cityId){
        try{
            // limiting to reduce render time
            const response=await Airport.findAll({
                where:{
                    cityId
                },
                raw:true
            })
            return response;
        }catch(error){
            throw error;
        }
    }
}

module.exports={AirportRepository}