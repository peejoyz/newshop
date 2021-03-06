var express = require('express');
var router = express.Router();
var fs = require('fs-extra');

// Get Product Model
var Product = require('../models/product'); 

// Get Product Model
var Category = require('../models/category'); 

// Get all products
router.get('/', function(req, res){
    Product.find(function (err, products) {
        if(err)
            console.log(err);

            res.render('all_products', {
                title: 'All products',
                products: products
            });
        
    });
});

router.get('/', function(req, res){
    Product.find(function (err, products) {
        if(err)
            console.log(err);

            res.render('index', {
                title: 'All products',
                products: products
            });
        
    });
});


// Get products by category
router.get('/:category', function(req, res){
    var categorySlug = req.params.category;

    Category.findOne({slug: categorySlug}, function(err, c) {
        Product.find({category: categorySlug}, function (err, products) {
            if(err)
                console.log(err);
    
                res.render('cat_products', {
                    title: c.slug.toUpperCase(),
                    products: products
                });
            
        });
    });

    
});

// Get product details
router.get('/:category/:product', function(req, res){
    
    var galleryImages = null;
    var loggedIn = (req.isAuthenticated()) ? true : false; 

    Product.findOne({slug: req.params.product}, function(err, product) {
        if(err) {
            console.log(err);
        } else {
            var galleryDir = 'public/product_images/' + product._id + '/gallery';

            fs.readdir(galleryDir, function(err, files) {
                if (err) {
                    console.log(err);
                } else {
                    galleryImages = files;

                    res.render('product', {
                        title: product.title,
                        p: product,
                        galleryImages: galleryImages,
                        loggedIn: loggedIn
                    });
                }
                    
            });
        }
    })

    
});



module.exports = router;