const express = require("express");

const router=express.Router();

const {CityController}=require('../../../controllers/controllersIndex');
const { createCityValidation,updateCityValidation } = require("../../../middlewares/middlewares");

const cityController=new CityController();
router.post('/createCity',createCityValidation,cityController.createCity);
router.get('/getCity/:cityId',cityController.getCity);
router.delete('/deleteCity/:cityId',cityController.deleteCity);
router.patch('/updateCity',updateCityValidation,cityController.updateCity);
router.get('/getAllCities',cityController.getAllCities);
module.exports=router