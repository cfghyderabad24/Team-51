const exp=require('express')
const app=exp()
require('dotenv').config()
const mongoClient=require('mongodb').MongoClient
const path=require('path')
const cors=require('cors')

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

//app.use(exp.static(path.join(__dirname,'../client/build')))

mongoClient.connect(process.env.DB_URL)
.then(client=>{
    const NextSkills=client.db('NextSkills')
    const facultyCollection=NextSkills.collection('facultycollection')
    const studentCollection=NextSkills.collection('studentcollection')
    const parentCollection=NextSkills.collection('parentcollection')
    const ngoCollection=NextSkills.collection('ngocollection')
    const csrCollection=NextSkills.collection('csrcollection')
    const govtCollection=NextSkills.collection('govtcollection')
    const productCollection=NextSkills.collection('productcollection')
    app.set('facultyCollection',facultyCollection)
    app.set('studentCollection',studentCollection)
    app.set('parentCollection',parentCollection)
    app.set('ngoCollection',ngoCollection)
    app.set('csrCollection',csrCollection)
    app.set('govtCollection',govtCollection)
    app.set('productCollection',productCollection)
    console.log("DB connection success");
})
.catch(err=>console.log('Error in DB connection',err))

app.use(exp.json())


/*app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../client/build/index.html'))
})*/

const facultyApp=require('./APIs/facultyApi')
const studentApp=require('./APIs/studentApi')
const parentApp=require('./APIs/parentApi')
const ngoApp=require('./APIs/ngoApi')
const govtApp=require('./APIs/govtAPi')
const csrApp=require('./APIs/csrApi')
const mailApp=require('./APIs/mailApi')
const productApp=require('./APIs/productApi')

app.use('/faculty-api',facultyApp)
app.use('/student-api',studentApp)
app.use('/parent-api',parentApp)
app.use('/ngo-api',ngoApp)
app.use('/govt-api',govtApp)
app.use('/csr-api',csrApp)
app.use('/mail-api',mailApp)
app.use('/product-api',productApp)


app.use((err,req,res,next)=>{
    res.send({messgae:'error',payload:err.message})
})



const port=process.env.PORT || 5000;
app.listen(port,()=>{console.log(`Web server on port ${port}`)})