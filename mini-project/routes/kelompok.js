const { Router } = require("express")
const kelompokRoute = Router()
const { kelompokController } = require("../controllers")


kelompokRoute.get('/',kelompokController.getKelompoks)
kelompokRoute.post('/create',kelompokController.create)
kelompokRoute.get('/delete/:id',kelompokController.delete)
kelompokRoute.get('/information/:id',kelompokController.getInformationKelompok)
kelompokRoute.get('/:id/practicalTool',kelompokController.getKelompokProductTool)
module.exports = kelompokRoute
