const express=require('express')

const router=express.Router()

const cityRoutes=require('./cityRoutes/cityRouter')
const airportRotes=require('./airportRoutes/airportRouter')
router.use('/city',cityRoutes)
router.use('/airport',airportRotes)

module.exports=router;