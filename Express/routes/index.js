// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express',name:'Welcome to the world of Express Js' });

// })
// module.exports = router;


var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index',{title:'signupform'});

});
router.post('/submit',function(req,res){
   
MongoClient.connect("mongodb://localhost:27017",function(err,client){
    // MongoClient.connect("mongodb://localhost:27017/integration_tests", {native_parser:true}, function(err, client) {
if(err){
        console.log('error');
    }
    else{
    
        client.db('newdb').collection('users').insertOne(req.body)
    }
})
    
    res.send("got it")
})

module.exports = router;