const express=require('express')

const router=express.Router()

const cityRoutes=require('./cityRoutes/cityRouter')

router.use('/city',cityRoutes)

module.exports=router;