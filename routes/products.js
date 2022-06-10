const express = require('express');
const { getProducts, updateProduct, deleteProduct, createProduct, getSingleProduct, getProductRemove } = require('../controllers/products');
const validate = require('../middleware/validation');
const Product = require('../models/Products');


const router = new express.Router();

router.get('/', getProducts)
 
router.get('/createProduct',  (req,res)=>{
    res.render('newProduct')
})
router.get('/:productId', async (req,res)=>{
    const { productId } = req.params;
    const products = await Product.findById(productId);
    res.render('deleteProduct', products)
})

router.post('/', validate, createProduct )

router.get('/:productId', getSingleProduct )

router.patch('/:productId', updateProduct)

router.delete('/:productId', deleteProduct)

module.exports = router;