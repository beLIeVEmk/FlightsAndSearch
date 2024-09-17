const {CityRepository}=require('../repository/repository');

class CityService{
    constructor(){
        this.cityRepo=new CityRepository();
    }

    async createCity(data){
        try{
            const createCityResponse=await this.cityRepo.createCity(data.name);
            return createCityResponse;
        }catch(error){
            console.log(error)
            throw error;
        }
    }

    async updateCity(data){
        try{
            const {cityId,...updateParams}=data
            const updateCityResponse=await this.cityRepo.updateCity(cityId,updateParams);
            return updateCityResponse[0];
        }catch(error){
            throw error;
        }
    }

    async getCity(cityId){
        try{
            const getCityRepsonse=await this.cityRepo.getCity(cityId);
            return getCityRepsonse;
        }catch(error){
            throw error;
        }
    }

    async deleteCity(cityId){
        try{
            const deleteCityResponse=await this.cityRepo.deleteCity(cityId)
            return deleteCityResponse;
        }catch(error){
            throw error;
        }
    }
}

module.exports=CityService;