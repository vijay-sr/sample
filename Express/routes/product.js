var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const items=["Redmi","Samsung","Sony"]
    res.render('product', { title: 'Products',items});
});

module.exports = router;
