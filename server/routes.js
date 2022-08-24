const express = require('express');
const routesSchema = require('./models/routesSchema');
const productSchema = require("./models/routesSchema");

const router = express();

//Routes entered here;

router.get('/api/allproducts', async (req, res) => {
    const findProducts = await productSchema.find();
    res.json(findProducts);
});

router.get('/api/individualproduct/:id', async (req, res) => {
    const singleProduct = await routesSchema.findById(req.params.id);
    return res.json(singleProduct)
});

router.post('/api/addproduct', (req, res) => {
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
        .then(item => {
            res.json(item)
        })
        .catch(err => {
            res.status(400).json({ mssg: "Bad request, error 400", err: err })
        })
});

router.get('/api/getproducts/:brand', async (req, res) => {
    const brandedProducts = await routesSchema.find({ brand: req.params.brand });
    res.json(brandedProducts)
})

router.post('/api/addreview/:id', async (req, res) => {
    try {
        const product = await routesSchema.findById(req.params.id);
        const reviewList = product.reviews;
        const addedReview = {
            name: req.body.name,
            review: req.body.review,
            rating: req.body.rating
        };
        reviewList.push(addedReview);
        console.log(reviewList)
        await product.save()
        res.json(product)
    } catch (err) {
        res.status(400).json({ msg: "There is an error", err });
    }
})

module.exports = router;
