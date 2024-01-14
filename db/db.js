const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://uday:kookaburra@cluster0.acq17kp.mongodb.net/BLOG')

const blogSchema = new mongoose.Schema({
    id : Number,
    title : String,
    description : String
})

const blogObj = mongoose.model('blogCollection',blogSchema)

module.exports = {blogObj}