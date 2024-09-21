const express = require("express");

const router=express.Router();

const {FlightController}=require('../../../controllers/controllersIndex');
const { validateCreateFlight,validateGetFlightsWithFilter } = require("../../../middlewares/middlewares");


const flightController=new FlightController();
router.post('/createFlight',validateCreateFlight,flightController.createFlight);
router.get('/getFlightInfo/:flightId',flightController.getFlight);
router.get('/getFlightsByFilter',validateGetFlightsWithFilter,flightController.getFlightsWithFilter)

module.exports=router