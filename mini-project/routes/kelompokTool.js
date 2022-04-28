const { Router } = require('express')
const kelompokToolRoute = Router()
const { kelompokToolController } = require('../controllers')

kelompokToolRoute.get('/',kelompokToolController.getKelompokPracticalTool)
kelompokToolRoute.post('/create',kelompokToolController.create)
kelompokToolRoute.get('/delete/:id',kelompokToolController.delete)
kelompokToolRoute.get('/:id/practicalTool',kelompokToolController.getKelompokPracticalTool)
kelompokToolRoute.get('/tambah',kelompokToolController.getPracticalTool)

module.exports = kelompokToolRoute
