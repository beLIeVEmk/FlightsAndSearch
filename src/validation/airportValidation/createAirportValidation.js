

const createAirportValidation = {
    type:"object",
    properties:{
        name:{type:"string",minLength:1},
        address:{type:"string",minLength:1},
        cityId:{type:"number"}
    },
    required:["name","cityId"],
    additionalProperties: false
}
module.exports = createAirportValidation;