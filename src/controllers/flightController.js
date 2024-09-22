const FlightService = require("../services/flightService");
const helperFunctions=require('../utils/utils')
const codes=require('../utils/errorCodes');
const messages = require("../utils/messages");
class FlightController{
    constructor(){
        this.flightService=new FlightService()
    }

    createFlight=(async (req,res)=>{
        try{
            const createflightResponse=await this.flightService.createFlight(req.body)
            helperFunctions.createResBody(codes.SuccessCode.CREATED,messages.Success,createflightResponse,res)
         }catch(error){
             console.log(error);
             res.status(500).json({
                 statusCode:500,
                 message:"Create city Error",
                 data:{}
             })
         }
    })

    getFlight=(async(req,res)=>{
        try{
            const getFlightResponse=await this.flightService.getFlightData(req.params.flightId)
            helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,getFlightResponse,res)
        }catch(error){
            console.log(error);
             res.status(500).json({
                 statusCode:500,
                 message:"Create city Error",
                 data:{}
             })
        }
    })

    getFlightsWithFilter=(async (req,res)=>{
        try{
            const getFlightResponse=await this.flightService.findFlights(req.query)
            helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,getFlightResponse,res)
        }catch(error){
            console.log(error);
             res.status(500).json({
                 statusCode:500,
                 message:"Create city Error",
                 data:{}
             })
        }
    })
}

module.exports=FlightController