const express = require('express');
const hbs = require('hbs');
const connectDatabase = require('./database/database');
const productRoutes = require('./routes/products')
const Product = require('./models/Products');

connectDatabase ()

const app = express();
app.use(express.static('./public'))


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/products',productRoutes)
app.set('view engine','hbs');
app.set('views','./views')

app.get('/', async (req,res)=>{
    const products = await Product.find()
    res.render('index',{products})
})

app.get("*", (req, res) => {
    res.sendStatus(404)

})

app.listen(8000,()=>{
    console.log("Server started at port 8000")
})