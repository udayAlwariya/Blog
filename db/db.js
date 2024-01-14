require("dotenv").config();
const mongoose = require('mongoose')

const connectionString = process.env.DB_CONNECTION_STRING; 

const connectDB = async ()=>{
    try {
        await mongoose.connect(connectionString);
        console.log("Connected to Database");
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;