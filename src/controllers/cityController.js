const {CityService}=require('../services/services')
const helperFunctions=require('../utils/utils')
const codes=require('../utils/errorCodes');
const messages = require('../utils/messages');
/**
 * In below we are using arrow methods as once any callback called - router.use 
 * Context of 'this' is lost so cityService will give error
 * So arrow function inherits the current this - So we use arrow function
 */
class CityController{
    constructor(){
        this.cityService=new CityService();
    }

    /**
     * As this is a POST req - 201 statusCode - also there must be a reqBody
     * @param {*} req 
     * @param {*} res 
     */
    createCity = async (req,res)=>{
        try{
           const createCityResponse=await this.cityService.createCity(req.body); 
           helperFunctions.createResBody(codes.SuccessCode.CREATED,messages.Success,createCityResponse,res)
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
    deleteCity=async(req,res)=>{
        try{
            const deleteCityResponse=await this.cityService.deleteCity(req.params.cityId); 
            if(deleteCityResponse){
                helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,deleteCityResponse,res)
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
    getCity=async (req,res)=>{
        try{
            const getCityResponse=await this.cityService.getCity(req.params.cityId); 
            if(getCityResponse){
                helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,getCityResponse,res)
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
    updateCity=async(req,res)=>{
        try{
            const updateCityResponse=await this.cityService.updateCity(req.body); 
            if(updateCityResponse){
                helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,updateCityResponse,res)
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

    getAllCities=async(req,res)=>{
        try{
            let citiesInfo;
            if(req?.query){
                citiesInfo=await this.cityService.getAllCities(req.query.cityName);
            }else{
                citiesInfo=await this.cityService.getAllCities();
            }
            if(citiesInfo){
                helperFunctions.createResBody(codes.SuccessCode.OK,messages.Success,citiesInfo,res)
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

module.exports=CityController;