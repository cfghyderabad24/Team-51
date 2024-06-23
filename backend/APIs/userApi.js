const exp=require('express')
const userApp=exp.Router()
const bcryptjs=require('bcryptjs')
const expressAsyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
require('dotenv').config()
//const verifyToken=require('../Middlewares/verifyToken')

let userCollection

userApp.use((req,res,next)=>{
    userCollection=req.app.get('userCollection')
    next()
})

userApp.post('/user',expressAsyncHandler(async(req,res)=>{
    const newUser=req.body
    //check for duplicate user 
    const dbUser=await userCollection.findOne({username:newUser.username})
    if(dbUser!==null){
        res.send({message:'User already exists'})
    }else{
       const hashedPassword= await bcryptjs.hash(newUser.password,6)
       newUser.password=hashedPassword
       await userCollection.insertOne(newUser)
       res.send({message:"User created"})
    }   
}))

userApp.post('/login',expressAsyncHandler(async(req,res)=>{
    const userCred=req.body
    const dbUser=await userCollection.findOne({username:userCred.username})
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



module.exports=userApp