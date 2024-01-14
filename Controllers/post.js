const postService = require("../Services/services")
const Post = require("../models/Post")

const postController = {
    addData: (req,res)=>{
        postService.addData(req.body);
        res.status(201).json({msg : "created Successfully"})
    },

    deleteData: async (req,res)=>{
        const {id} = req.params;
        await postService.deleteData(id);
        res.status(202).json({msg : "deleted successfully "})
    },

    updateData: async (req,res)=>{
        const {id} = req.params;
        await postService.updateData(id)
        res.status(202).json({msg : "Updated Successfully"})
    },

    getAll: async (req,res)=>{
        res.status(200).json(await postService.getAll())
    },

    getOne: async (req,res)=>{
        const {id} = req.params;
        res.status(200).json(await postController.getOne(id))
    }
}

module.exports = postController;