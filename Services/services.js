
const { blogObj } = require("../db/db")

function addData(req,res){
   const id = req.body.id 
   const title = req.body.title
   const description = req.body.description
   blogObj.create({
    id : id,
    title : title,
    description : description
   })
   res.status(201).json({
    msg : "created Successfully"
   })
}

async function updateData(req,res){
    const ID = req.params.id
    await blogObj.findOneAndReplace({id : ID},{
        id : req.body.id,
        title : req.body.title,
        description : req.body.description
    })
    res.status(202).json({
        msg : "Updated Successfully"
    })
}

async function deleteData(req,res){
    const ID = req.params.id
    await blogObj.deleteOne({
        id : ID
    })
    res.status(202).json({
        msg : "deleted successfully "
    })
}

async function getAll(req,res){
    const response = await blogObj.find({})
    res.json({
        response
    })

}

async function getOne(req,res){
    const ID = req.params.id
    const response = await blogObj.findOne({id : ID})
    res.json({
        response
    })
    res.status(200)
}

module.exports = {addData,deleteData,getAll,getOne,updateData}
