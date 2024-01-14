const express = require('express')
require("dotenv").config();
const connectDB = require('./db/db');

const app = express()

app.use(express.json())

app.use('/api/v1/post',require('./Routes/post'))

const port = process.env.PORT||3001;

app.listen(port,()=>{
    connectDB();
    console.log(`Server is listening on ${port}`);
})