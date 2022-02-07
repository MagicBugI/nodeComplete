const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name:String,
    price : Number,
    country : String,
})

const Product = mongoose.model('Product', ProductSchema , 'products');

module.exports = Product;