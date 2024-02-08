const mongoose = require('mongoose');

const product = mongoose.model('product',{


    title: {type : String},
    decription :{type : String},
    price : {type : Number},
    image: {type :String }

});


module.exports = product;