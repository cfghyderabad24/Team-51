const exp=require('express')
const productApp=exp.Router()
const bcryptjs=require('bcryptjs')
const expressAsyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
require('dotenv').config()
//const verifyToken=require('../Middlewares/verifyToken')

let productCollection
productApp.use((req,res,next)=>{
    productCollection=req.app.get('productCollection')
    next()
})

productApp.get('/products',expressAsyncHandler(async(req,res)=>{

    const productList=await productCollection.find({})
    res.send({message:"All products",payload:productList})
    
}))

productApp.get('/product/:name',expressAsyncHandler(async(req,res)=>{
    const name=req.params.name
    const dbProduct=await productCollection.findOne({name:name})
    res.send({message:`${name} product`,payload:dbProduct})
}))

productApp.delete('/product/:name',expressAsyncHandler(async(req,res)=>{
    const productName=req.params.name
    let result=await productCollection.deleteOne({name:productName})
    res.send({message:"Product Deleted"})
}))

module.exports=productApp 