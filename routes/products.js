const express = require('express');
const { getProducts, updateProduct, deleteProduct, createProduct, getSingleProduct } = require('../controllers/products');


const router = new express.Router();

router.get('/', getProducts)
    // code for update


router.get('/createProduct',  (req,res)=>{
    res.render('newProduct')
})

router.post('/', createProduct )

router.get('/:productId', getSingleProduct )

router.patch('/:productId', updateProduct)

router.delete('/delete/:productId', deleteProduct)

module.exports = router;