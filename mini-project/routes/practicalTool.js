const {Router} = require('express')
const practicalToolRoute = Router()
const {practicalToolController} = require('../controllers')



practicalToolRoute.get('/',practicalToolController.getPracticalTool)
practicalToolRoute.post('/create',practicalToolController.create)
practicalToolRoute.get('/delete/:id',practicalToolController.delete)
practicalToolRoute.get('/tambah',practicalToolController.getPracticalTools)

module.exports = practicalToolRoute