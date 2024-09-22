const {AirplaneService}=require('../services/services')
const helperFunctions=require('../utils/utils')
const codes=require('../utils/errorCodes');
const messages = require('../utils/messages');
/**
 * In below we are using arrow methods as once any callback called - router.use 
 * Context of 'this' is lost so cityService will give error
 * So arrow function inherits the current this - So we use arrow function
 */
class AirplaneController{
    constructor(){
        this.airplaneService=new AirplaneService();
    }

    /**
     * As this is a POST req - 201 statusCode - also there must be a reqBody
     * @param {*} req 
     * @param {*} res 
     */
    createAirplane = async (req,res)=>{
        try{
           const createAirplaneResponse=await this.airplaneService.createAirplane(req.body)
           helperFunctions.createResBody(codes.SuccessCode.CREATED,messages.Success,createAirplaneResponse,res) 
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
    deleteAirplane=async(req,res)=>{
        try{
            const deleteAirplaneResponse=await this.airplaneService.deleteAirplane(req.params.airplaneId); 
            if(deleteAirplaneResponse){
                helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,deleteAirplaneResponse,res)
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
    getAirplane=async (req,res)=>{
        try{
            const getAirplaneResponse=await this.airplaneService.getAirplane(req.params.airplaneId); 
            if(getAirplaneResponse){
                helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,getAirplaneResponse,res)
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
    updateAirplane=async(req,res)=>{
        try{
            const updateAirplaneResponse=await this.airplaneService.updateAirplane(req.body); 
            if(updateAirplaneResponse){
                helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,updateAirplaneResponse,res) 
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

}

module.exports=AirplaneController;