const Product = require("../models/Products");

const getProducts = async (req, res) => {
  // const {productId} = req.params;
  const products = await Product.find();
  res.json(products);
};

const createProduct = async (req, res) => {
  console.log(req.body);
  let newProduct = await Product.create({
    item: req.body.item,
    quantity: req.body.quantity,
    unit_cost: req.body.unit_cost,
    total_cost: req.body.total_cost,
  });
  res.render('index', newProduct);
  // res.json(newProduct);
};

const getSingleProduct = async (req, res) => {
  const { productId } = req.params;
  const products = await Product.findById(productId);
  res.render('deleteProduct', products)
};

const updateProduct = async (req, res) => {
  console.log(req.body);
  const { productId } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(productId, {
    $set: {
      item: req.body.item,
      quantity: req.body.quantity,
      unit_cost: req.body.unit_cost,
    },
  });
  //   res.json(updatedProduct)
  res.render("index", updatedProduct);
};



const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const result = await Product.findByIdAndDelete(productId,{
    item: req.body.item,
    quantity: req.body.quantity,
    unit_cost: req.body.unit_cost,
    total_cost: req.body.total_cost,
  });
  res.render('index', result)
 
};

module.exports = {
  getProducts,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
