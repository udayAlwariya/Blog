const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    id : Number,
    title : String,
    description : String,
    content: String,
    thumbnail:String
})

// {
//     id:1,
//     thumbnail:"imageUrl"
//     slug:'role-of-internet',
//     title:'Role of Internet',
//     description:'in words less then 255',
//     content: [
//         {
//             title:"Section 1 Title",
//             description: "Desction"
//         },
//         {
//             title:"Section 2 Title",
//             description: "Desction"
//         },
//     ],
// }

const Post = mongoose.model('postCollection',postSchema)

module.exports = Post