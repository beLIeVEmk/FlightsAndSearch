

const updateAirportValidation = {
    type:"object",
    properties:{
        airportId:{type:"number"},
        name:{type:"string",minLength:1},
        address:{type:"string",minLength:1},
        cityId:{type:"number"}
    },
    required:["airportId"],
    additionalProperties: false
}
module.exports = updateAirportValidation