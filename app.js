const http = require('http');
const express = require('express')

const app = express();

app.use((req,res,next)=>{
    console.log("In First Middleware");
    next();
})

app.use((req,res,next)=>{
    console.log("In Second Middleware");
    res.send('<h1>Hello from Express</h1>');
})

app.listen(3000);