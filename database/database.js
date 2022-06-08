 const mongoose = require('mongoose');

 const connectDatabase = async ()=> {
     try {
       await mongoose.connect("mongodb://localhost:27017/InventrotyManagement")
         console.log('Database Connected Sucessfully')
     } catch (error) {
         console.error(error +'Database cannot be connected')
     }
 }

 module.exports = connectDatabase;