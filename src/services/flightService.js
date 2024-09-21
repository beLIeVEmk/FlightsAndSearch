const { Op } = require('sequelize')
const {FlightRepository,AirplaneRepository}=require('../repository/repository')
const helperFunctions=require('../utils/utils')

class FlightService{
    constructor(){
        this.flightRepo=new FlightRepository()
        this.airplaneRepo=new AirplaneRepository()
    }

    #createFilter(filterData){
        try{
            
            let filter={}
            if(filterData.arrTime){
                Object.assign(filter,{arrTime:{[Op.gte]:new Date(filterData.arrTime)}})
            }
            if(filterData.flightId){
                filter.flightNo=filterData.flightId
            }
            if(filterData.airplaneId){
                filter.airplaneId=filterData.airplaneId
            }
            if(filterData.arrAirportId){
                filter.arrAirportId=filterData.arrAirportId
            }
            if(filterData.deptAirportId){
                filter.deptAirportId=filterData.deptAirportId
            }
            if(filterData.deptTime){
                Object.assign(filter,{deptTime:{[Op.lte]:new Date(filterData.deptTime)}})
            }
            if(filterData.minPrice){
                Object.assign(filter,{price:{[Op.gte]:filterData.minPrice}})
            }
            if(filterData.maxPrice){
                Object.assign(filter,{price:{[Op.lte]:filterData.maxPrice}})
            }
            return filter
        }catch(error){
            throw error;
        }
    }
    async createFlight(requestBody){
        try{
            if(helperFunctions.compareTime(new Date(requestBody.arrTime),new Date(requestBody.deptTime))){
                throw new Error('arrTime to be greater than deptTime')
            }
            let airplaneInfo=await this.airplaneRepo.getAirplane(requestBody.airplaneId);
            requestBody.totalSeats=airplaneInfo?.dataValues?.capacity;
            return await this.flightRepo.createFlight(requestBody)
        }catch(error){
            throw error;
        }
    }

    async getFlightData(flightId){
        try{
            return await this.flightRepo.getFlight(flightId);
        }catch(error){
            throw error;
        }
    }

    async findFlights(filter){
        try{
            const filterParams=this.#createFilter(filter);
            return await this.flightRepo.getFlightsByFilters(filterParams)
        }catch(error){
            throw error;
        }
    }
}

module.exports=FlightService