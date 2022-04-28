const { student, kelompok } = require ("../models")
// const student = require("../models/student")


class studentController{

    static async getStudents(req,res){
            try{
                let students = await student.findAll({
                    include : [kelompok],
                    order : [
                        ['id','asc']
                    ]

                })
                // res.json(students)
                res.render('student.ejs',{students})
            }
            catch(err){
                res.json(err)
            }
    }
    static async getStudentLogin(req,res){
        try{
            let students = await student.findAll ({
                include : [kelompok]
            })
            res.render('studentLogin.ejs',{students})
        }
        catch(err){
            res.json(err)
        }
    }

    static async create(req,res){
        try{
            const {name,nim,kelompokId} = req.body
            let result = await student.create({
            name,nim,kelompokId
            })
            res.redirect('/student')
        }   
        catch(err){
            res.json(err)
        }
    }
    static async delete(req,res){
        try{
            const id = +req.params.id
            let result = await student.destroy({
                where : 
                {id}
            })
           
            
            res.redirect('/student')
        }
        catch(err){
            res.json(err)
        }
    }
    static async edit (req,res){
        const id = +req.params.id
        try{
            const {  name, nim, kelompokId} = req.body
            let result = await student.update({
                name, nim,kelompokId
            },{
                where :{id}
            })
            result[0] === 1?
            res.json({
                message: `id ${id} has been update`
            }):
            res.json({
                message : `id ${id} not updated`
            })
            // res.json(result) 
        } 
        catch(err){
            res.json(err)
        }
    }


}
module.exports = studentController
