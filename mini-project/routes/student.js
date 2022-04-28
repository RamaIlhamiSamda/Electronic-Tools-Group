const { Router } = require("express")
const studentRoute = Router()
const { studentController } = require("../controllers")


studentRoute.get('/',studentController.getStudents)
studentRoute.get('/login',studentController.getStudentLogin)
studentRoute.get('/delete/:id',studentController.delete)
studentRoute.post('/edit/:id',studentController.edit)
studentRoute.post('/create',studentController.create)

module.exports = studentRoute
