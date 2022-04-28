const {kelompok, student, kelompokTool, practicalTool,additionalTool} = require('../models')
const kelompoktool = require('../models/kelompoktool')
// const kelompokController = require('./controllers')

class kelompokController{
    static async getKelompoks(req,res){
        try{
            let kelompoks = await kelompok.findAll({
                include : [student]
            })
            res.json(kelompoks)
        }
        catch(err){
            res.json(err)
        }
    }
    static async getKelompokProductTool(req,res){
        try{
            let kelompoks = await kelompok.findAll({
                include : [practicalTool]
            })
            res.render(kelompoks)
        }
        catch(err){
            res.json(err)
        }
    }

    static async create(req,res){
        try{
            const { kelompokName, kelompokNumber } = req.body
            const result = await kelompok.create({
                kelompokName, kelompokNumber
            })
            res.json(result)
        }
        catch(err){
            res.json(err)
        }
    }
    static async delete(req,res){
        try{
            const id = +req.params.id
            let result = await kelompok.destroy({
                where : 
                {id}
            })
            // res.json(result)
            result ===1?
            res.json({
                message : `id ${id} has been deleted`
            }) :
   
             res.json({
                message : `id ${id} not deleted`
             })
        }
        catch(err){
            res.json(err)
        }
    }
    static async getInformationKelompok(req,res){
        
        try{
            const id = +req.params.id

            let students = await student.findAll({
                where : {
                     kelompokId: id
                    
                },

                 include : [kelompok]
            })
            // res.json(students)
            res.render("anggotaKelompok.ejs",{students})
        }
        catch(err){
            res.json(err)
        }
    }
    
    
}

module.exports = kelompokController