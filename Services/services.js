
const Post = require("../models/Post")

const postService = {
    //Add data 
    addData : (postData)=>{
       return Post.create(postData);
    },

    //Update Data
    updateData: async (postId,updatedData)=>{
        const res = await Post.findOneAndReplace({id : postId},updatedData)
        return res;
    },

    //Delete 
    deleteData: async (postId)=>{
        const res = await Post.deleteOne({id : postId})
        return res;
    },

    // Get
    getAll: async ()=>{
        const response = await Post.find({})
        return response;
    },

    // Get One
    getOne: async (postId)=>{
        const response = await Post.findOne({id : ID})
        return response;
    }
}

module.exports = postService;