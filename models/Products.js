const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    item : String,
    quantity : Number,
    unit_cost : Number,
    total_cost : Number,
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;