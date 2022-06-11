const express = require('express');
const { getProducts, updateProduct, deleteProduct, createProduct, getSingleProduct, getProductRemove, getDeleteProduct } = require('../controllers/products');
const validate = require('../middleware/validation');
const Product = require('../models/Products');


const router = new express.Router();

router.get('/', getProducts)
 
router.get('/createProduct',  (req,res)=>{
    res.render('newProduct')
})

router.post('/', validate, createProduct )

router.get('/edit/:productId', getSingleProduct )

router.patch('/edit/:productId', updateProduct)

router.get('delete/:productId', getDeleteProduct )


module.exports = router;