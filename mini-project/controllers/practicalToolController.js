const { practicalTool } = require ("../models")

class practicalToolController{

    static async getPracticalTool(req,res){
        try{
            const practicalTools = await practicalTool.findAll({
                
            })
            // res.json(practicalTools)
            res.render('practicalTool.ejs',{practicalTools})
        }
        catch(err){
            res.json(err)
        }
    }

    static async getPracticalTools(req,res){
        try{
            let practicalTools = await practicalTool.findAll ({
                
            })
            res.render('practicalToolCreate.ejs',{practicalTools})
        }
        catch(err){
            res.json(err)
        }
    }


    static async create(req,res){
        try{
            const {kelompokId, practicalToolId } = req.body
            const practicalTools = await practicalTool.create({
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

    static async create(req,res){
        try{
            const { name, ukuran, jumlah} = req.body
            const practicalTools = await practicalTool.create({
                name, ukuran, jumlah
            })
            res.redirect('/practicalTool')
        }
        catch(err){
            res.json(err)
        }
    }
    static async delete(req,res){
        try{
            const id = +req.params.id
            let result = await practicalTool.destroy({
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



module.exports = practicalToolController

