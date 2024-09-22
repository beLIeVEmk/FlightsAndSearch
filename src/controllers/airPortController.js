const {AirportService}=require('../services/services')
const helperFunctions=require('../utils/utils')
const codes=require('../utils/errorCodes');
const messages = require('../utils/messages');
/**
 * In below we are using arrow methods as once any callback called - router.use 
 * Context of 'this' is lost so cityService will give error
 * So arrow function inherits the current this - So we use arrow function
 */
class AirportController{
    constructor(){
        this.airportService=new AirportService();
    }

    /**
     * As this is a POST req - 201 statusCode - also there must be a reqBody
     * @param {*} req 
     * @param {*} res 
     */
    createAirport = async (req,res)=>{
        try{
           const createAirportResponse=await this.airportService.createAirport(req.body); 
           helperFunctions.createResBody(codes.SuccessCode.CREATED,messages.Success,createAirportResponse,res)
        }catch(error){
            console.log(error);
            res.status(500).json({
                statusCode:500,
                message:"Create city Error",
                data:{}
            })
        }
    }

    /**
     * delete request - params - /city/:cityId
     * @param {*} req 
     * @param {*} res 
     */
    deleteAirport=async(req,res)=>{
        try{
            const deleteAirportResponse=await this.airportService.deleteAirport(req.params.airportId); 
            if(deleteAirportResponse){
                helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,deleteAirportResponse,res) 
            }else{
                
                res.status(400).json({
                    statusCode:400,
                    message:"No city of such id exists",
                    data:{}
                })
            }
        }catch(error){
            console.log(error)
            res.status(500).json({
                statusCode:500,
                message:"Delete city Error",
                data:{}
            })
        }
    }

    /**
     * Get req - params - /city/:id
     * @param {*} req 
     * @param {*} res 
     */
    getAirport=async (req,res)=>{
        try{
            const getAirportResponse=await this.airportService.getAirport(req.params.airportName); 
            if(getAirportResponse){
                helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,getAirportResponse,res) 
            }else{
                res.status(400).json({
                    statusCode:400,
                    message:"No city of such id exists",
                    data:{}
                })
            }
        }catch(error){
            console.log(error)
            res.status(500).json({
                statusCode:500,
                message:"Get city Error",
                data:{}
            })
        }
    }
    updateAirport=async(req,res)=>{
        try{
            const updateAirportResponse=await this.airportService.updateAirport(req.body); 
            if(updateAirportResponse){
                helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,updateAirportResponse,res) 
            }else{
                res.status(400).json({
                    statusCode:400,
                    message:"Inalid update query",
                    data:{}
                })
            }
        }catch(error){
            console.log(error)
            res.status(500).json({
                statusCode:500,
                message:"update city Error",
                data:{}
            })
        }
    }

    getAllAirportsInCity=async(req,res)=>{
        try{
            let airportsInfo=await this.airportService.getAirportsInCity(req.params.cityId);
            if(airportsInfo){
                helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,airportsInfo,res) 
            }else{
                res.status(400).json({
                    statusCode:400,
                    message:"Inalid update query",
                    data:{}
                })
            }
        }catch(error){
            console.log(error)
            res.status(500).json({
                statusCode:500,
                message:"getAll city Error",
                data:{}
            })
        }
    }
}

module.exports=AirportController;