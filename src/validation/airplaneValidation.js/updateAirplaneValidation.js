

const updateAirplaneValidation = {
    type:"object",
    properties:{
        airplaneId:{type:"number"},
        modelName:{type:"string",minLength:1},
        capacity:{type:"number"}
    },
    required:["airplaneId"],
    additionalProperties: false
}
module.exports = updateAirplaneValidation;