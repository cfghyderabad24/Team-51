const exp=require('express')
const parentApp=exp.Router()
const bcryptjs=require('bcryptjs')
const expressAsyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
require('dotenv').config()
//const verifyToken=require('../Middlewares/verifyToken')

let parentCollection
parentApp.use((req,res,next)=>{
    parentCollection=req.app.get('parentCollection')
    next()
})

parentApp.post('/govt',expressAsyncHandler(async(req,res)=>{
    const newUser=req.body
    //check for duplicate user 
    const dbUser=await parentCollection.findOne({email:newUser.email})
    if(dbUser!==null){
        res.send({message:'User already exists'})
    }else{
       const hashedPassword= await bcryptjs.hash(newUser.password,6)
       newUser.password=hashedPassword
       await parentCollection.insertOne(newUser)
       res.send({message:"User created"})
    }   
}))

parentApp.post('/login',expressAsyncHandler(async(req,res)=>{
    const userCred=req.body
    const dbUser=await parentCollection.findOne({email:userCred.email})
    if(dbUser===null){
        res.send({message:"Invalid email"})
    }else{
       const status= await bcryptjs.compare(userCred.password,dbUser.password)
       if(status===false){
            res.send({message:"Invalid password"})
       }else{
           const signedToken= jwt.sign({email:dbUser.email},process.env.SECRET_KEY,{expiresIn:200})
           res.send({message:'Login sucess',token:signedToken,user:dbUser})
       }
    }
}))


module.exports=parentApp