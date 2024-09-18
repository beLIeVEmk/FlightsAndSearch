const {CityService}=require('../services/services')

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
           res.status(201).json({
                statusCode:201,
                message:"success",
                data:createCityResponse
           })
        }catch(error){
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
                res.status(200).json({
                        statusCode:200,
                        message:"success",
                        data:{}
                })
            }else{
                res.status(400).json({
                    statusCode:400,
                    message:"No city of such id exists",
                    data:{}
                })
            }
        }catch(error){
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
                res.status(201).json({
                    statusCode:200,
                    message:"success",
                    data:getCityResponse
                })
            }else{
                res.status(400).json({
                    statusCode:400,
                    message:"No city of such id exists",
                    data:{}
                })
            }
        }catch(error){
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
                res.status(200).json({
                    statusCode:200,
                    message:"success",
                    data:{}
                })
            }else{
                res.status(400).json({
                    statusCode:400,
                    message:"Inalid update query",
                    data:{}
                })
            }
        }catch(error){
            res.status(500).json({
                statusCode:500,
                message:"update city Error",
                data:{}
            })
        }
    }

    getAllCities=async(req,res)=>{
        try{
            const citiesInfo=await this.cityService.getAllCities();
            if(citiesInfo){
                res.status(200).json({
                    statusCode:200,
                    message:"success",
                    data:citiesInfo
                })
            }else{
                res.status(400).json({
                    statusCode:400,
                    message:"Inalid update query",
                    data:{}
                })
            }
        }catch(error){
            res.status(500).json({
                statusCode:500,
                message:"getAll city Error",
                data:{}
            })
        }
    }
}

module.exports=CityController;