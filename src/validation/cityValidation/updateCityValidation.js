

const updateCityValidation = {
    type:"object",
    properties:{
        cityId:{type:"number"},
        name:{type:"string",minLength:1},
        
    },
    required:["cityId"],
    additionalProperties: false
}
module.exports = updateCityValidation;