const express=require('express')

const router=express.Router()

const cityRoutes=require('./cityRoutes/cityRouter')
const airportRoutes=require('./airportRoutes/airportRouter')
const airplaneRoutes=require('./airplaneRoutes/airplaneRouter')
const flightRoutes=require('./flightRoutes/flightRouter')
router.use('/city',cityRoutes)
router.use('/airport',airportRoutes)
router.use('/airplane',airplaneRoutes)
router.use('/flight',flightRoutes)
module.exports=router;