const express = require('express');
const routesSchema = require('./models/routesSchema');
const productSchema = require("./models/routesSchema");
const productModel = require("./models/routesSchema");
//Askk LEO
const router = express();

//Routes entered here

 exports = router.get('/api/allproducts', async (req, res) => {
        const findProducts = await productSchema.find();
        res.json(findProducts); 
    });



router.get('/api/individualproduct/:id', async(req,res) =>{
    const singleProduct = await routesSchema.findById(req.params.id);
    return res.json(singleProduct) 
});


module.exports = router;
