const {AirplaneService}=require('../services/services')

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
           res.status(201).json({
                statusCode:201,
                message:"success",
                data:createAirplaneResponse
           })
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
                res.status(201).json({
                    statusCode:200,
                    message:"success",
                    data:getAirplaneResponse
                })
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