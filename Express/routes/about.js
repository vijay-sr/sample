var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const values=["John","Sam","Rose"]
    const person1={admin:true}
    const person={name:"vijay", education:{degree:"Btech",plusTwo:"ComputerScience"}}
  res.render('about', {title:"About page",values,person,person1});
  
});

module.exports = router;
