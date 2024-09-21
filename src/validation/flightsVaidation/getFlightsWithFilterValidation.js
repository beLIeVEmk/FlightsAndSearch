

const getFlightsByFiltersValidation = {
    type:"object",
    properties:{
        flightNo:{type:"string"},
        airplaneId:{type:"number"},
        deptAirportId:{type:"number"},
        arrAirportId:{type:"number"},
        deptTime:{type:"string"},
        arrTime:{type:"string"},
        minPrice:{type:"number"},
        maxPrice:{type:"number"}
    },
    required:[],
    additionalProperties: false
}
module.exports = getFlightsByFiltersValidation;