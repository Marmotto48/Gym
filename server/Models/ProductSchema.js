const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
    Date_exp : {type : Date, required : false},
    Quantite : {type : Number, required : false},
    Prix : {type : Number, required : false}
})

module.exports = mongoose.model('Product',productsSchema)