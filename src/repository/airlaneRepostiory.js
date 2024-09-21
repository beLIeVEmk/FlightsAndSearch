const { where } = require('sequelize');
const {Airplane, sequelize}=require('../models/index');
const { raw } = require('mysql2');

// In repo only we need to put the CRUD operations
class AirplaneRepository{

    async createAirPlane({modelName,capacity=200}){
        try{
            const airplaneResponse=await Airplane.create({modelName,capacity});
            return airplaneResponse;
        }catch(error){
            throw {error}
        }
    }

    async getAirplane(modelName){
        try{
            const airplaneInfo=await Airplane.findOne({where:{modelName}});
            return airplaneInfo
        }catch(error){
            throw error;
        }
    }

    async updateAirplane(airplaneId,updateParams){
        try{
            return await Airplane.update(
                updateParams,
                {
                    where:{
                        id:airplaneId
                    }
                }
            )
        }catch(error){
            throw error;
        }
    }
    async deleteAirplane(airplaneId){
        try{
            const response=await Airplane.destroy({
                where:{
                    id:airplaneId
                }
            })
            return response;
        }catch(error){
            throw {error}
        }
    }
}

module.exports={AirplaneRepository}