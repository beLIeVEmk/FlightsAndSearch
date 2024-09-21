const express = require("express");

const router=express.Router();

const {AirplaneController}=require('../../../controllers/controllersIndex');
const { createAirplaneValidation,updateAirplaneValidation } = require("../../../middlewares/middlewares");

const airplaneController=new AirplaneController();
router.post('/createAirplane',createAirplaneValidation,airplaneController.createAirplane);
router.get('/getAirplaneInfo/:airplaneId',airplaneController.getAirplane);
router.delete('/deleteAirplane/:airplaneId',airplaneController.deleteAirplane);
router.patch('/updateAirplane',updateAirplaneValidation,airplaneController.updateAirplane);

module.exports=router