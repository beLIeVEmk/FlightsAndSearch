const { where } = require('sequelize');
const {Flight}=require('../models/index')

class FlightRepository{
    async createFlight(requestBody){
        try{
            return await Flight.create({...requestBody})
        }catch(error){
            throw error;
        }
    }
    async deleteFlight(flightNo){
        try{
            return await Flight.destroy({
                flightNo
            })
        }catch(error){

        }
    }

    async getFlight(flightId){
        try{
            return await Flight.findOne({
                where:{
                    id:flightId
                }
            })
        }catch(error){
            throw error;
        }
    }

    async getFlightsByFilters(filter){
        try{
            return await Flight.findAll({
                where:filter
            })
        }catch(error){
            throw error;
        }
    }
}

module.exports=FlightRepository