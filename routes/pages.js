var express = require('express');
var router = express.Router();

// Get Page Model
var Page = require('../models/page'); 

// Get Product Model
var Product = require('../models/product'); 

// Get Product Model
var Category = require('../models/category'); 

// Get /
// router.get('/', function(req, res){

//    Page.find({slug:''}, function (err, page, products) {
//         if(err)
//             console.log(err);

//             res.render('index', {
//                 title: 'Home',
//                 //p: p.products
//                 products : products,
//                 //products: p
//                 //products: products.page
//                 content:page
//                 //content:page.content
                
//             });
        
//     });
// });

router.get('/', function(req, res){
    Page.find({slug: ''}, function (err, page, products) {
        Product.find(function (err, products) {
            if(err)
                console.log(err);
    
                res.render('all_products', {
                    title: 'Home',
                    products: products
                });
            
        });
    })
    
});

router.get('/contact', function(req,res) {
    res.render('pages/contact');
});

router.get('/about', function(req,res) {
    res.render('pages/about');
});
   
router.get('/buynow', function(req,res) {
    res.render('buynow');
});

router.post('/buynow', function(req,res) {
    res.render('buynow');
});

router.get('/thank_you', function(req,res) {
    res.render('thank_you');
});


module.exports = router;