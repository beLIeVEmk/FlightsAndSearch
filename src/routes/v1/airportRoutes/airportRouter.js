const express = require("express");

const router=express.Router();

const {AirportController}=require('../../../controllers/controllersIndex')

const airportController=new AirportController();
router.post('/createAirport',airportController.createAirport);
router.get('/getAirportInCity/:cityId',airportController.getAllAirportsInCity);
router.delete('/deleteAirport/:airportId',airportController.deleteAirport);
router.patch('/updateAirport',airportController.updateAirport);
router.get('/getAirport/:airportName',airportController.getAirport);
module.exports=router