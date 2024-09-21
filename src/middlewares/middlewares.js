const { createAirplaneValidation, updateAirplaneValidation } = require("./airplaneMiddleware");
const { createAirportValidation,updateAirportValidation } = require("./airportMiddleware");
const { createCityValidation, updateCityValidation } = require("./cityMiddleware");
const { validateCreateFlight, validateGetFlightsWithFilter } = require("./flightMiddlware");

module.exports={
    validateCreateFlight,
    createAirportValidation,
    updateAirportValidation,
    validateGetFlightsWithFilter,
    createCityValidation,
    updateCityValidation,
    createAirplaneValidation,
    updateAirplaneValidation
}