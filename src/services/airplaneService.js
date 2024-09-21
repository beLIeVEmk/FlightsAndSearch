const {AirplaneRepository}=require('../repository/repository');

class AirplaneService{
    constructor(){
        this.airplaneRepo=new AirplaneRepository();
    }

    async createAirplane(data){
        try{ 
            const createAirplaneResponse=await this.airplaneRepo.createAirPlane(data);
            return createAirplaneResponse;
        }catch(error){
            console.log(error)
            throw error;
        }
    }

    async updateAirplane(data){
        try{
            const {airplaneId,...updateParams}=data
            if(!airplaneId){
                throw new Error("Invalid request")
            }
            const updateAirplaneResponse=await this.airplaneRepo.updateAirplane(airplaneId,updateParams);
            return updateAirplaneResponse[0];
        }catch(error){
            throw error;
        }
    }

    
    async deleteAirplane(airplaneId){
        try{
            const deleteAirplaneResponse=await this.airplaneRepo.deleteAirplane(airplaneId);
            return deleteAirplaneResponse;
        }catch(error){
            throw error;
        }
    }

    async getAirplane(airplaneId){
        try{
            return await this.airplaneRepo.getAirplane(airplaneId)
        }catch(error){
            throw error
        }

    }
}

module.exports=AirplaneService;