const exp=require('express')
const newsApp=exp.Router()
const bcryptjs=require('bcryptjs')
const expressAsyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
require('dotenv').config()
//const verifyToken=require('../Middlewares/verifyToken')

let announcementCollection
newsApp.use((req,res,next)=>{
    announcementCollection=req.app.get('announcementCollection')
    next()
})

newsApp.get('/news',expressAsyncHandler(async(req,res)=>{

    const announcementList=await announcementCollection.find()
    res.send({message:"all announcements",payload:announcementList})
}))



module.exports=newsApp