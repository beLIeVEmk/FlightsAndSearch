const express=require('express')

const router=express.Router()

const cityRoutes=require('./cityRoutes/cityRouter')
const airportRoutes=require('./airportRoutes/airportRouter')
const airplaneRoutes=require('./airplaneRoutes/airplaneRouter')
router.use('/city',cityRoutes)
router.use('/airport',airportRoutes)
router.use('/airplane',airplaneRoutes)
module.exports=router;