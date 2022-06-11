const Product = require("../models/Products");

const getProducts = async (req, res) => {
  // const {productId} = req.params;
  const products = await Product.find();
  res.render('index', products);
};

const addProduct = (req,res)=>{
  res.render('newProduct')
}



const getSingleProduct = async (req, res) => {
  const { productId } = req.params;
  const products = await Product.findById(productId);
  res.render('editProduct', products)
};

const createProduct = async (req, res) => {
  console.log(req.body);
  let newProduct = await Product.create({
    item: req.body.item,
    quantity: req.body.quantity,
    unit_cost: req.body.unit_cost,
    total_cost: req.body.total_cost,
  });
  res.send(newProduct);
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
    res.render("index", updatedProduct);
  }

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const result = await Product.findByIdAndDelete(productId,{
    item: req.body.item,
    quantity: req.body.quantity,
    unit_cost: req.body.unit_cost,
    total_cost: req.body.total_cost,
  });
  res.send(result);
 
};

module.exports = {
  getProducts,
  createProduct,
  addProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
