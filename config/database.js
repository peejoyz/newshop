var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dnet', function(err){
    if(err){
        console.log(err)
    } else {
        console.log('connect to db');
    }
});