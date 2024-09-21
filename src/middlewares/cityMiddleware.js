const messages = require('../utils/messages');
const helperFunctions=require('../utils/utils')
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const { createCityValidationSchema,updateCityValidationSchema } = require('../validation/validations');

const createCityValidation=(req,res,next)=>{
    const ajv = new Ajv({ useDefaults: true, allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(createCityValidationSchema);
    const valid = validate(req.body);
    if(!valid){
        return helperFunctions.createResBody(400,messages.InvalidInput,{},res);
    }
    next();
}
const updateCityValidation=(req,res,next)=>{
    const ajv = new Ajv({ useDefaults: true, allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(updateCityValidationSchema);
    const valid = validate(req.body);
    if(!valid){
        return helperFunctions.createResBody(400,messages.InvalidInput,{},res);
    }
    next();
}

module.exports={createCityValidation,updateCityValidation}