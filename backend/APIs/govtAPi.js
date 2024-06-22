const exp=require('express')
const govtApp=exp.Router()
const bcryptjs=require('bcryptjs')
const expressAsyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
require('dotenv').config()
//const verifyToken=require('../Middlewares/verifyToken')

let govtCollection
govtApp.use((req,res,next)=>{
    govtCollection=req.app.get('govtCollection')
    next()
})

govtApp.post('/govt',expressAsyncHandler(async(req,res)=>{
    const newUser=req.body
    //check for duplicate user 
    const dbUser=await govtCollection.findOne({email:newUser.email})
    if(dbUser!==null){
        res.send({message:'User already exists'})
    }else{
       const hashedPassword= await bcryptjs.hash(newUser.password,6)
       newUser.password=hashedPassword
       await govtCollection.insertOne(newUser)
       res.send({message:"User created"})
    }   
}))

govtApp.post('/login',expressAsyncHandler(async(req,res)=>{
    const userCred=req.body
    const dbUser=await govtCollection.findOne({email:userCred.email})
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


module.exports=govtApp