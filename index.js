const express = require('express');
const hbs = require('hbs');
const connectDatabase = require('./database/database');
const productRoutes = require('./routes/products')
const Product = require('./models/Products');
const { deleteProduct } = require('./controllers/products');
const path = require('path');
const morgan = require('morgan');


connectDatabase ();

const app = express();
app.use('/css', express.static(path.resolve(__dirname, "public/css")))
app.use('/js', express.static(path.resolve(__dirname, "public/js")))

app.use(morgan('tiny'));


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/products/',productRoutes)
app.set('view engine','hbs');
app.set('views','./views')

app.get('/', async (req,res)=>{
    const products = await Product.find().sort({item : -1})
    res.render('index',{products})
})
app.delete('/:productId', deleteProduct)

app.get("*", (req, res) => {
    res.sendStatus(404)

})

app.listen(8000,()=>{
    console.log("Server started at port 8000")
})