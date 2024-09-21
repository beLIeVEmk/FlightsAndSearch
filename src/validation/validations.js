const createAirplaneValidationSchema = require("./airplaneValidation.js/createAirplaneValidation");
const updateAirplaneValidationSchema = require("./airplaneValidation.js/updateAirplaneValidation");
const createAirportValidationSchema = require("./airportValidation/createAirportValidation");
const updateAirportValidationSchema = require("./airportValidation/updateAirPortValidation");
const createCityValidationSchema = require("./cityValidation/createCityValidation");
const updateCityValidationSchema = require("./cityValidation/updateCityValidation");
const createFlightValidationSchema = require("./flightsVaidation/createFlightValidation");
const getFlightsByFiltersValidationSchema = require("./flightsVaidation/getFlightsWithFilterValidation");

module.exports={
    createFlightValidationSchema,
    getFlightsByFiltersValidationSchema,
    createCityValidationSchema,
    createAirportValidationSchema,
    createAirplaneValidationSchema,
    updateAirportValidationSchema,
    updateAirplaneValidationSchema,
    updateCityValidationSchema
}