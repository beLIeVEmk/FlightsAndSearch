const express = require("express");

const router=express.Router();

const {AirportController}=require('../../../controllers/controllersIndex');
const { createAirportValidation,updateAirportValidation } = require("../../../middlewares/airportMiddleware");

const airportController=new AirportController();
router.post('/createAirport',createAirportValidation,airportController.createAirport);
router.get('/getAirportInCity/:cityId',airportController.getAllAirportsInCity);
router.delete('/deleteAirport/:airportId',airportController.deleteAirport);
router.patch('/updateAirport',updateAirportValidation,airportController.updateAirport);
router.get('/getAirport/:airportName',airportController.getAirport);
module.exports=router