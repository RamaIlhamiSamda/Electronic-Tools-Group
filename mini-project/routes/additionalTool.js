const {Router} = require('express')
const additionalToolRoute = Router()
const {additionalToolController} = require('../controllers')



additionalToolRoute.get('/',additionalToolController.getAdditionalTool)
additionalToolRoute.post('/create',additionalToolController.create)
additionalToolRoute.get('/delete/:id',additionalToolController.delete)

module.exports = additionalToolRoute