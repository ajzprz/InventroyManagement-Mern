const express = require('express');
const { getProducts, updateProduct, deleteProduct, createProduct, getSingleProduct, getProductRemove, getDeleteProduct, addProduct } = require('../controllers/products');
const validate = require('../middleware/validation');
const Product = require('../models/Products');


const router = new express.Router();

router.get('/', getProducts)
 
router.get('/createProduct',addProduct)

router.post('/', validate, createProduct )

router.get('/edit/:productId', getSingleProduct )

router.patch('/edit/:productId', updateProduct)

module.exports = router;