const exp=require('express')
const facultyApp=exp.Router()
const bcryptjs=require('bcryptjs')
const expressAsyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
require('dotenv').config()
//const verifyToken=require('../Middlewares/verifyToken')

let facultyCollection
facultyApp.use((req,res,next)=>{
    facultyCollection=req.app.get('facultyCollection')
    next()
})

facultyApp.post('/faculty',expressAsyncHandler(async(req,res)=>{
    const newUser=req.body
    //check for duplicate user 
    const dbUser=await facultyCollection.findOne({username:newUser.username})
    if(dbUser!==null){
        res.send({message:'User already exists'})
    }else{
       const hashedPassword= await bcryptjs.hash(newUser.password,6)
       newUser.password=hashedPassword
       await facultyCollection.insertOne(newUser)
       res.send({message:"User created"})
    }   
}))

facultyApp.post('/login',expressAsyncHandler(async(req,res)=>{
    const userCred=req.body
    const dbUser=await facultyCollection.findOne({username:userCred.username})
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


/*facultyApp.get('/articles/:username',verifyToken,expressAsyncHandler(async(req,res)=>{
    const username=req.params.username
    let articlesList=await articlesCollection.find({$and:[{username:username},{status:true}]}).toArray()
    res.send({message:`articles by ${username}`,payload:articlesList})
}))*/

/*facultyApp.post('/article',verifyToken,expressAsyncHandler(async(req,res)=>{
    const newArticle=req.body
    await articlesCollection.insertOne(newArticle)
    res.send({message:'New article created'})
    
    
}))

facultyApp.put('/article',verifyToken,expressAsyncHandler(async(req,res)=>{
    const modifiedArticle=req.body
    let result=await articlesCollection.updateOne({articleId:modifiedArticle.articleId},{$set:{...modifiedArticle}})
    console.log(result);
    res.send({message:"Article modified"})
}))


//soft delete
authorApp.put('/article/:articleId',verifyToken,expressAsyncHandler(async(req,res)=>{
    const articleId=req.params.articleId
    let result=await articlesCollection.updateOne({articleId:articleId},{$set:{status:false}})
    console.log(result);
    res.send({message:"Article removed"})
}))*/
module.exports=facultyApp