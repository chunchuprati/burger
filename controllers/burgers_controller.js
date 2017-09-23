var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

// router.get('/',function(req,res){
//     res.redirect('/burgers');
// });

router.get('/',function(req,res){
    burgers.all(function(data){
        var hbsObject = {burgers: data};
        //console.log(hbsObject);
        res.render('index',hbsObject);
    });
});

router.post('/burgers',function(req,res){
    console.log("Burger Name: " + req.body.b_name);
    burgers.create(['burger_name'],[req.body.b_name],function(data){
        res.redirect('/');
    });
});

router.put('/burgers/:id',function(req,res){
    var condition = 'id = ' + req.params.id;
    console.log('condition', condition);
    burgers.update({
        devoured:true
    },condition,function(data){
        res.redirect('/');
    });
});

module.exports = router;