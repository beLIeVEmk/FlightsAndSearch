const { where } = require('sequelize');
const {City}=require('../models/index')

// In repo only we need to put the CRUD operations
class CityRepository{

    async createCity(name){
        try{
            const city=await City.create({name});
            return city;
        }catch(error){
            throw {error}
        }
    }

    async getCity(cityId){
        try{
            const cityInfo=await City.findOne({where:{id:cityId}});
            return cityInfo
        }catch(error){
            throw error;
        }
    }

    async updateCity(cityId,updateParams){
        try{
            return await City.update(
                updateParams,
                {
                    where:{
                        id:cityId
                    }
                }
            )
        }catch(error){
            throw error;
        }
    }
    async deleteCity(cityId){
        try{
            const response=await City.destroy({
                where:{
                    id:cityId
                }
            })
            return response;
        }catch(error){
            throw {error}
        }
    }
}

module.exports={CityRepository}