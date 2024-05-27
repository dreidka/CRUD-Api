const express = require('express');
const app = express();
const mongose = require('mongoose');
const Product = require("./models/product-model.js");
const productRoutes = require('./routes/product.route.js')

//middleware
app.use(express.json());
//routes
app.use("/api/products",productRoutes)


mongose.connect("mongodb+srv://admin:Admin123456@dbnode1.roxizgq.mongodb.net/Prueba?retryWrites=true&w=majority&appName=dbNode1")
.then(()=>{
    console.log("Database connected");
    app.listen(3000,()=>{
        console.log("Server is running on port 3000")
    })
})
.catch(()=>{
    console.log("Database connection fail");
})



//186.84.89.167
//console.log("Hello World");