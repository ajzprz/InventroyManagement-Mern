const validate = (req,res,next) =>{
    if(req.body.item ==='' || req.body.quantity ==='' || req.body.unit_cost ==="" ){
     res.status(401).send("Value cannot be empty")
     }
     else{
     next()
     }
 }

 module.exports = validate;