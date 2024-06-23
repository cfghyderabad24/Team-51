const exp=require('express')
const adminApp=exp.Router()
const bcryptjs=require('bcryptjs')
const expressAsyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
require('dotenv').config()
//const verifyToken=require('../Middlewares/verifyToken')

let adminCollection
let productCollection
let announcementCollection
adminApp.use((req,res,next)=>{
    adminCollection=req.app.get('adminCollection')
    productCollection=req.app.get('productCollection')
    announcementCollection=req.app.get('announcementCollection')
    next()
})

adminApp.post('/admin',expressAsyncHandler(async(req,res)=>{
    const newUser=req.body
    //check for duplicate user 
    const dbUser=await adminCollection.findOne({username:newUser.username})
    if(dbUser!==null){
        res.send({message:'User already exists'})
    }else{
       const hashedPassword= await bcryptjs.hash(newUser.password,6)
       newUser.password=hashedPassword
       await adminCollection.insertOne(newUser)
       res.send({message:"User created"})
    }   
}))

adminApp.post('/login',expressAsyncHandler(async(req,res)=>{
    const userCred=req.body
    const dbUser=await adminCollection.findOne({username:userCred.username})
    if(dbUser===null){
        res.send({message:"Invalid username"})
    }else{
       const status= await bcryptjs.compare(userCred.password,dbUser.password)
       if(status===false){
            res.send({message:"Invalid password"})
       }else{
           const signedToken= jwt.sign({username:dbUser.username},process.env.SECRET_KEY,{expiresIn:200})
           res.send({message:'Login sucess',token:signedToken,user:dbUser})
       }
    }
}))

adminApp.put('/discount/:productName',expressAsyncHandler(async(req,res)=>{
    const productName=req.params.productName
    const newDiscount=req.body
    console.log('hello');
    const dbRes=await productCollection.updateOne({name:productName},{$set:{discount:newDiscount}})
    
    console.log(dbRes);
    res.send({message:"Product discount updated"})
}))

adminApp.post('/announcement',expressAsyncHandler(async(req,res)=>{
    const newAnnouncement=req.body
    const dbUser=await announcementCollection.insertOne(newAnnouncement)
}))

module.exports=adminApp