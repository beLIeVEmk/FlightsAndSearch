const { AirplaneRepository } = require("./airlaneRepostiory");
const { AirportRepository } = require("./airportRepository");
const { CityRepository } = require("./cityRepository");
const FlightRepository = require("./flightRepository");

module.exports={
    CityRepository,
    AirportRepository,
    AirplaneRepository,
    FlightRepository
}