const {kelompokTool, kelompok, practicalTool} = require('../models')
// const kelompokController = require('./controllers')

class kelompokToolController{
    static async getKelompokPracticalTool(req,res){
        try{
            const id = +req.params.id
            let result= await kelompokTool.findAll({
                where : {
                   kelompokId: id
                },
                include : [kelompok,practicalTool]
            })
            // res.json(result)
        
            let practicalTools = result.map(el=>{
                return el.practicalTool.dataValues
            })
            
            let kelompokPracticalTool = {
                ...result[0].kelompok.dataValues,practicalTools

            }

            res.render('kelompokTool.ejs',{kelompokPracticalTool})
        }
        catch(err){
            res.json(err)
        }
    } 
    static async getPracticalTool(req,res){
        try{
            let kelompokTools = await kelompokTool.findAll ({
                include : [kelompok,practicalTool]
            })
            res.render('kelompokToolCreate.ejs',{kelompokTools})
        }
        catch(err){
            res.json(err)
        }
    }


    static async create(req,res){
        try{
            const {kelompokId, practicalToolId } = req.body
            const kelompokTools = await kelompokTool.create({
                kelompokId,
                practicalToolId 
            })
            // res.json(result)
            res.redirect('/practicalTool')
            
        }
        catch(err){
            res.json(err)
        }
    }
    static async delete(req,res){
        try{
            const id = +req.params.id
            let result = await kelompokTool.destroy({
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


}

module.exports = kelompokToolController