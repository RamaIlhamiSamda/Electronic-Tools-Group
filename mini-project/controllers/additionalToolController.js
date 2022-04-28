const { additionalTool } = require ("../models")

class additionalToolController{

    static async getAdditionalTool(req,res){
        try{
            const additionalTools = await additionalTool.findAll({
                
            })
            // res.json(additionalTools)
            res.render('additionalTool.ejs',{additionalTools})
        }
        catch(err){
            res.json(err)
        }
    }

    static async create(req,res){
        try{
            const { name, ukuran, jumlah, harga } = req.body
            const result = await additionalTool.create({
                name, ukuran, jumlah, harga
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
            let result = await additionalTool.destroy({
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


module.exports = additionalToolController

