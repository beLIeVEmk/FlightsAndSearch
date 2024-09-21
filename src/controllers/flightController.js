const FlightService = require("../services/flightService");

class FlightController{
    constructor(){
        this.flightService=new FlightService()
    }

    createFlight=(async (req,res)=>{
        try{
            const createflightResponse=await this.flightService.createFlight(req.body)
            res.status(201).json({
                 statusCode:201,
                 message:"success",
                 data:createflightResponse
            })
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
            res.status(201).json({
                 statusCode:201,
                 message:"success",
                 data:getFlightResponse
            })
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
            res.status(201).json({
                 statusCode:201,
                 message:"success",
                 data:getFlightResponse
            })
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