const express = require("express")
const route = express.Router()


route.get('/',(req,res)=>{
    // res.json({
    //     message : "pirate and bounty"
    // })
    res.render('index.ejs')
})


const studentRoutes = require('./student')
const kelompokRoute = require('./kelompok')
const additionalToolRoute = require('./additionalTool')
const practicalToolRoute = require('./practicalTool')
const kelompokToolRoute = require('./kelompokTool')

route.use('/student',studentRoutes)
route.use('/kelompok',kelompokRoute)
route.use('/additionalTool',additionalToolRoute)
route.use('/practicalTool',practicalToolRoute)
route.use('/kelompokTool',kelompokToolRoute)



module.exports = route
