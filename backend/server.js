require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");


//express app
const app = express();
const productRoutes = require('./routes/productRoutes.js');


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.path)
    res.send("hello")
    next();
})


//connect to db
mongoose.connect(process.env.DB_URL)
    .then(() => {
        //listen to requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db and Listening", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })
