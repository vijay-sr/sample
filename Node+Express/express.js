// const { log } = require('console');
// const { appendFile } = require('fs');
var express= require('express');
var exp=express()
var path=require('path')

exp.use(function(req,res,next){
    console.log("Use function")
    next();
})

exp.get('/',function(req,res){
    // console.log('welcome to express');
    res.send('welcome to express')
    })

exp.get('/signup',function(req,res){
        res.sendFile(path.join(__dirname,'signup.html'))

    })
exp.post('/signupaction',function(req,res){
    // res.sendFile(path.join(__dirname,'signup.html'))
        res.send('Your account has created')

    })    







exp.listen(7000,()=>{
    console.log("express started");
})