

const createFlightValidation = {
    type:"object",
    properties:{
        flightNo:{type:"string"},
        airplaneId:{type:"number"},
        deptAirportId:{type:"number"},
        arrAirportId:{type:"number"},
        deptTime:{type:"string"},
        arrTime:{type:"string"},
        price:{type:"number"},
        boardingGate:{type:"string"}
    },
    required:["flightNo","airplaneId","deptAirportId","arrAirportId","deptTime","arrTime","price"],
    additionalProperties: false
}
module.exports = createFlightValidation;