const express = require('express')
const router = express.Router()
const {addData}  = require('../Services/services')
const {deleteData}  = require('../Services/services')
const {getAll}  = require('../Services/services')
const {getOne}  = require('../Services/services')
const {updateData}  = require('../Services/services')


router.get('/API/V1/post/:id',(req,res)=>{
    getOne(req,res)
})
router.get('/API/V1/post',(req,res)=>{
    getAll(req,res)
})
router.post('/API/V1/post',(req,res)=>{
    addData(req,res)
    
})
router.put('/API/V1/post/:id',(req,res)=>{
    updateData(req,res)
})
router.delete('/API/V1/post/:id',(req,res)=>{
    deleteData(req,res)
})

module.exports = router;