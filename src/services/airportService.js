const {AirportRepository}=require('../repository/repository');

class AirportService{
    constructor(){
        this.airportRepo=new AirportRepository();
    }

    async createAirport(data){
        try{
            const createAirportResponse=await this.airportRepo.createAirport(data);
            return createAirportResponse;
        }catch(error){
            console.log(error)
            throw error;
        }
    }

    async updateAirport(data){
        try{
            const {airportId,...updateParams}=data
            const updateAirportResponse=await this.airportRepo.updateAirport(airportId,updateParams);
            return updateAirportResponse[0];
        }catch(error){
            throw error;
        }
    }

    async getAirportsInCity(cityId){
        try{
            const getAirportRepsonse=await this.airportRepo.getAllAirportsInCity(cityId);
            return getAirportRepsonse;
        }catch(error){
            throw error;
        }
    }

    async deleteAirport(airportId){
        try{
            const deleteAirportResponse=await this.airportRepo.deleteAirport(airportId)
            return deleteAirportResponse;
        }catch(error){
            throw error;
        }
    }

    async getAirport(name){
        try{
            return await this.airportRepo.getAirport(name)
        }catch(error){
            throw error
        }

    }
}

module.exports=AirportService;