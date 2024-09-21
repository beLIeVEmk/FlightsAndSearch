

const createAirplaneValidation = {
    type:"object",
    properties:{
        modelName:{type:"string",minLength:1},
        capacity:{type:"number"}
    },
    required:["modelName"],
    additionalProperties: false
}
module.exports = createAirplaneValidation;