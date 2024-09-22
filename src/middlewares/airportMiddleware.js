const helperFunctions=require('../utils/utils')
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const { createAirportValidationSchema,updateAirplaneValidationSchema, updateAirportValidationSchema } = require('../validation/validations');
const messages=require('../utils/messages')

const createAirportValidation=(req,res,next)=>{
    const ajv = new Ajv({ useDefaults: true, allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(createAirportValidationSchema);
    const valid = validate(req.body);
    if(!valid){
        return helperFunctions.createResBody(400,messages.InvalidInput,{},res);
    }
    next();
}

const updateAirportValidation=(req,res,next)=>{
    const ajv = new Ajv({ useDefaults: true, allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(updateAirportValidationSchema);
    const valid = validate(req.body);
    if(!valid){
        return helperFunctions.createResBody(400,messages.InvalidInput,{},res);
    }
    next();
}
module.exports={createAirportValidation,updateAirportValidation}