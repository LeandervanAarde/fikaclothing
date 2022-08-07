const express = require('express');
const routesSchema = require('./models/routesSchema');
const productSchema = require("./models/routesSchema");

const router = express();

//Routes entered here;

 exports = router.get('/api/allproducts', async (req, res) => {
        const findProducts = await productSchema.find();
        res.json(findProducts); 
    });

router.get('/api/individualproduct/:id', async(req,res) =>{
    const singleProduct = await routesSchema.findById(req.params.id);
    return res.json(singleProduct) 
});

router.post('/api/addproduct', (req, res) =>{
    const product = new routesSchema({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        discount: req.body.discount,
        timeStamp: req.body.timeStamp,
        description: req.body.description,
        images: req.body.images,
        reviews: req.body.reviews,
        availableStock: req.body.availableStock
    })

    product.save()
    .then(item =>{
        res.json(item)
    })
    .catch(err =>{
        res.status(400).json({mssg: "Bad request, error 400", err: err})
    })
});





module.exports = router;
