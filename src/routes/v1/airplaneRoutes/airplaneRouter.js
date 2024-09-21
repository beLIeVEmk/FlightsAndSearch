const express = require("express");

const router=express.Router();

const {AirplaneController}=require('../../../controllers/controllersIndex')

const airplaneController=new AirplaneController();
router.post('/createAirplane',airplaneController.createAirplane);
router.get('/getAirplaneInfo/:airplaneId',airplaneController.getAirplane);
router.delete('/deleteAirplane/:airplaneId',airplaneController.deleteAirplane);
router.patch('/updateAirplane',airplaneController.updateAirplane);

module.exports=router