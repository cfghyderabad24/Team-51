const exp=require('express')
const app=exp()
require('dotenv').config()
const mongoose = require("mongoose");
const path=require('path')
const cors=require('cors')

app.use(cors({
    origin: 'http://localhost:3000', // Adjust according to your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

//app.use(exp.static(path.join(__dirname,'../client/build')))

mongoose.connect(process.env.DB_URL)
    .then(() => {
        //listen to requests
        
            console.log("connected to db and Listening");
    })
    .catch((error) => {
        console.log(error)
    })


app.use(exp.json())






/*app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../client/build/index.html'))
})*/

app.use((err,req,res,next)=>{
    res.send({messgae:'error',payload:err.message})
})


const port=process.env.PORT || 5000;
app.listen(port,()=>{console.log(`Web server on port ${port}`)})