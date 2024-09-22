const helperFunctions=require('../utils/utils')
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const { createAirplaneValidationSchema,updateAirplaneValidationSchema } = require('../validation/validations');
const messages=require('../utils/messages')

const createAirplaneValidation=(req,res,next)=>{
    const ajv = new Ajv({ useDefaults: true, allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(createAirplaneValidationSchema);
    const valid = validate(req.body);
    if(!valid){
        return helperFunctions.createResBody(400,messages.InvalidInput,{},res);
    }
    next();
}
const updateAirplaneValidation=(req,res,next)=>{
    const ajv = new Ajv({ useDefaults: true, allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(updateAirplaneValidationSchema);
    const valid = validate(req.body);
    if(!valid){
        return helperFunctions.createResBody(400,messages.InvalidInput,{},res);
    }
    next();
}
module.exports={createAirplaneValidation,updateAirplaneValidation}