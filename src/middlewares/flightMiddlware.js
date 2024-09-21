const messages = require('../utils/messages');
const helperFunctions=require('../utils/utils')
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const { createFlightValidationSchema,getFlightsByFiltersValidationSchema } = require('../validation/validations');

const validateCreateFlight=(req,res,next)=>{
    const ajv = new Ajv({ useDefaults: true, allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(createFlightValidationSchema);
    const valid = validate(req.body);
    if(!valid){
        return helperFunctions.createResBody(400,messages.InvalidInput,{},res);
    }
    next();
}
const validateGetFlightsWithFilter=(req,res,next)=>{
    const ajv = new Ajv({ useDefaults: true, allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(getFlightsByFiltersValidationSchema);
    const valid = validate(req.query);
    if(!valid){
        return helperFunctions.createResBody(400,messages.InvalidInput,{},res);
    }
    next();
}
module.exports={
    validateCreateFlight,
    validateGetFlightsWithFilter
}