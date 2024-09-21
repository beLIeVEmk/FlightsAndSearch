const express = require("express");

const router=express.Router();

const {FlightController}=require('../../../controllers/controllersIndex')

const flightController=new FlightController();
router.post('/createFlight',flightController.createFlight);
router.get('/getFlightInfo/:flightId',flightController.getFlight);
router.get('/getFlightsByFilter',flightController.getFlightsWithFilter)
/*router.delete('/deleteCity/:cityId',cityController.deleteCity);
router.patch('/updateCity',cityController.updateCity);
router.get('/getAllCities',cityController.getAllCities);*/
module.exports=router