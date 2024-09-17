const express = require("express");

const router=express.Router();

const {CityController}=require('../../../controllers/controllersIndex')

const cityController=new CityController();
router.post('/createCity',cityController.createCity);
router.get('/getCity/:cityId',cityController.getCity);
router.delete('/deleteCity/:cityId',cityController.deleteCity);
router.patch('/updateCity',cityController.updateCity);
module.exports=router